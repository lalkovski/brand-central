import { Button } from 'components/Button'
import Flex from 'components/Flex'
import { Input } from 'components/Input'
import { Select } from 'components/Select'
import { SmartForm } from 'components/SmartForm'
import { TextArea } from 'components/TextArea'
import { addBrand } from 'data/Brand/thunks'
import { selectCategories } from 'data/Category/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routing/routes'
import { AppDispatch } from 'store'
import { TAddEditBrandFormValues, addEditBrandValidationSchema } from './utils'

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
      <Input type='text' name='name' placeholder='Coca Cola' />
      <Input type='text' name='revenue' placeholder='$4 billion' />
      <Input
        type='text'
        name='picture'
        placeholder='https://www.coca-colacompany.com/content/dam/company/us/en/the-coca-cola-company-logo.svg'
        label='Picture URL'
      />
      <TextArea name='description' placeholder='Lorem ipsum dolor sit amet...' rows={26} />
      <Select name='categoryId' options={categories} label='Category' />
      <Flex width='100%' justifyContent='flex-end' alignItems='flex-end' padding='20px 0'>
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
