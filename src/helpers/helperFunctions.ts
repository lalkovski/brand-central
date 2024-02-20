import { IBrand, SORT_BRANDS_TYPE } from 'models/Brand'

type ImportFn = () => Promise<object>
type RetryFn = Promise<any>

/**
 * A function that retries loading on chunk
 */
export const retry = (func: ImportFn, retriesLeft = 5, interval = 1000): RetryFn =>
  new Promise((resolve, reject) => {
    func()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error)
            return
          }
          retry(func, retriesLeft - 1, interval).then(resolve, reject)
        }, interval)
      })
  })

/**
 * A function that updates an item into an array
 * @param data - the data array from the reducer
 * @param item - the item that needs to be updated
 * @returns - an array with the updated item
 */
export const updateArray = <T extends { id: number; [key: string]: any }>(
  data: T[],
  payload: T
): T[] => {
  const updatedArray = data.map((item) => {
    if (item.id !== payload.id) {
      return item
    }
    return payload
  })
  return updatedArray
}

/**
 * A function that deletes an item from an array
 * @param data - the data object from the reducer
 * @param id - the id of the item that needs to be deleted
 * @returns - an array with the item deleted
 */
export const deleteFromArray = <T extends { id: number; [key: string]: any }>(
  data: T[],
  id: number
): T[] => {
  const updatedArray = data.filter((item) => item.id !== id)
  return updatedArray
}

/**
 * A function that adds an item to an array
 * @param item - the item that needs to be added
 * @param data - the data object from the reducer
 * @returns - an array with the item added
 */
export const addToArray = <T extends { id: number; [key: string]: any }>(
  item: T,
  data: T[]
): T[] => [item, ...data]

/**
 * A function that adds an item to an array if that item doesn't exist within that array
 * @param data - the data object from the reducer
 * @param item - the item that needs to be added if it doesn't exist
 * @returns - an array with the item added if it doesn't exist
 */
export const maybeAddToArray = <T extends { id: number; [key: string]: any }>(
  data: T[],
  item: T
): T[] => {
  const exists = data.find((element) => element.id === item.id)

  if (!exists) {
    return [item, ...data]
  } else return data
}

/**
 * A function that sorts the brands array
 * @param brandsArray - the array of brands to be sorted
 * @param sortType - the type by which the array is going to be sorted
 * @returns - a sorted brands array
 */
export const getSortedBrandsArray = (brandsArray: IBrand[], sortType?: SORT_BRANDS_TYPE) => {
  let sortedBrands: IBrand[] = []
  if (sortType === SORT_BRANDS_TYPE.ALPHABETICALLY) {
    sortedBrands = brandsArray.map((el) => el).sort((a, b) => a.name.localeCompare(b.name))
  }
  if (sortType === SORT_BRANDS_TYPE.REVERSE_ALPHABETICALLY) {
    sortedBrands = brandsArray.map((el) => el).sort((a, b) => b.name.localeCompare(a.name))
  }
  if (!sortType) {
    sortedBrands = brandsArray.map((el) => el).sort((a, b) => a.id - b.id)
  }

  return sortedBrands
}
