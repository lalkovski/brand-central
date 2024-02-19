import { AddEditBrandForm } from 'components/AddEditBrandForm'
import Flex from 'components/Flex'
import { Surface } from 'components/Surface'
import { Title } from './style'

const AddBrand = () => {
  return (
    <Flex
      backgroundColor='#F4F4F4'
      justifyContent='center'
      alignItems='flex-start'
      width='100%'
      height='95vh'
    >
      <Surface hasLeftMargin={false} width='79%' alignItems='center'>
        <Title>Add Brand</Title>
        <AddEditBrandForm />
      </Surface>
    </Flex>
  )
}

export default AddBrand
