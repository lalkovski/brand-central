import { number, object, string } from 'yup'

export type TAddEditBrandFormValues = {
  name: string
  revenue: string
  picture: string
  description: string
  categoryId: number
}

export const addEditBrandValidationSchema = object().shape({
  name: string().required('Name is required').min(4, 'Name must be at least 4 characters'),
  revenue: string().required('Revenue is required'),
  picture: string().required('Image URL is required').url('Invalid URL'),
  description: string().required('Description is required'),
  categoryId: number().required('Category is required'),
})
