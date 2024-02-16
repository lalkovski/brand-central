import * as Yup from 'yup';

export const createProductValidation = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(4, 'Title must be at least 4 characters'),
  price: Yup.number()
    .typeError('Price must be a number')
    .required('Price is required')
    .min(4, 'Price must be higher than 4'),
  picture: Yup.string().required('Image URL is required').url('Invalid URL'),
  description: Yup.string().required('Description is required'),
  state: Yup.string().required('State is required'),
  category: Yup.string().required('Category is required'),
});
