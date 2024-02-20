/**
 * Handles errors from API
 * @param response
 * @returns
 */
export const errorHandling: (response: any) => Promise<Error> = (response) => {
  const { status, data } = response

  if (status >= 200 && status <= 299) {
    return data
  }

  const { message, code } = data.meta

  throw new Error(code, message)
}
