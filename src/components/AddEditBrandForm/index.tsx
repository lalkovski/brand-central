import { Button } from 'components/Button'
import Flex from 'components/Flex'
import { Input } from 'components/Forms/Input'
import { Select } from 'components/Forms/Select'
import { Textarea } from 'components/Forms/Textarea'
import { SmartForm } from 'components/SmartForm'
import { selectCategories } from 'data/Category/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routing/routes'
import { TAddEditBrandFormValues, addEditBrandValidationSchema } from './utils'
import { AppDispatch } from 'store'
import { addBrand } from 'data/Brand/thunks'

export const AddEditBrandForm = () => {
  const categories = useSelector(selectCategories)
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch()

  const handleSubmit = async (data: TAddEditBrandFormValues) => {
    await dispatch(addBrand(data))
    navigate(ROUTES.ROOT)
  }

  return (
    <SmartForm
      validationSchema={addEditBrandValidationSchema}
      onSubmit={(data) => {
        handleSubmit(data)
      }}
    >
      <Input type='text' name='name' placeholder='Name' />
      <Input type='text' name='revenue' placeholder='Revenue' />
      <Input type='text' name='picture' placeholder='Image URL' />
      <Textarea name='description' placeholder='Description' rows={26} />
      <Select name='categoryId' options={categories} />
      <Flex width='100%' justifyContent='flex-end' alignItems='flex-end' marginTop='20px'>
        <Button onClick={() => navigate(ROUTES.ROOT)} isOutlined>
          Cancel
        </Button>
        <Button type='submit' margin='0 0 0 10px'>
          Submit
        </Button>
      </Flex>
    </SmartForm>
  )
}
