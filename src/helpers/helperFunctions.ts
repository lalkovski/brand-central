/**
 * Retry loading on chunk
 */
type ImportFn = () => Promise<object>;
type RetryFn = Promise<any>;

export const retry = (
  func: ImportFn,
  retriesLeft = 5,
  interval = 1000
): RetryFn =>
  new Promise((resolve, reject) => {
    func()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }
          retry(func, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });

export const updateArray = <T extends { id: number; [key: string]: any }>(
  data: T[],
  payload: T
): T[] => {
  const updatedArray = data.map((item) => {
    if (item.id !== payload.id) {
      return item;
    }
    return payload;
  });
  return updatedArray;
};

export const deleteFromArray = <T extends { id: number; [key: string]: any }>(
  data: T[],
  id: number
): T[] => {
  const updatedArray = data.filter((item) => item.id !== id);
  return updatedArray;
};

export const addToArray = <T extends { id: number; [key: string]: any }>(
  item: T,
  data: T[]
): T[] => [item, ...data];

export const maybeAddToArray = <T extends { id: number; [key: string]: any }>(
  data: T[],
  item: T
): T[] => {
  const exists = data.find((element) => element.id === item.id);

  if (!exists) {
    return [item, ...data];
  } else return data;
};
