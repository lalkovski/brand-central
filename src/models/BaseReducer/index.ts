import { IError } from '../Global'

export interface IBaseReducer<T> {
  error?: IError
  isFetching: boolean
  data: T
}
