import { IBrand } from 'models/Brand'
import { IStock, TStockKeyTypes } from 'models/Stock'

/**
 * A function that returns data based on the selected brand
 * @param selectedBrand - the selected brand
 * @returns - string for data filtration
 */
export const getDataForChart = (stocks: { [key: string]: IStock }, selectedBrand?: IBrand) => {
  let objectKey: TStockKeyTypes = '1. open'

  switch (selectedBrand?.id) {
    case 1:
      objectKey = '1. open'
      break
    case 2:
      objectKey = '2. high'
      break
    case 3:
      objectKey = '5. volume'
      break
    case 4:
      objectKey = '4. close'
      break
    case 5:
      objectKey = '3. low'
      break
    default:
      objectKey = '1. open'
  }
  return Object.keys(stocks)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .map((key: string) => stocks[key][objectKey])
}

export const getSortedStockLabels = (stocks: { [key: string]: IStock }) => {
  return Object.keys(stocks).sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
}
