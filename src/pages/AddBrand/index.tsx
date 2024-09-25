import { AddEditBrandForm } from 'components/AddEditBrandForm'
import Flex from 'components/Flex'
import { FullScreenLoader } from 'components/FullScreenLoader'
import { Surface } from 'components/Surface'
import { useBrandsData } from 'pages/Brands/utils'
import { Title } from './style'
import { isMobile } from 'helpers/helperFunctions'

const AddBrand = () => {
  const { brandsIsFetching } = useBrandsData()

  if (brandsIsFetching) {
    return <FullScreenLoader />
  }
  return (
    <Flex
      backgroundColor='#F4F4F4'
      justifyContent='center'
      alignItems='flex-start'
      width='100%'
      height='95vh'
    >
      <Surface hasLeftMargin={false} width={isMobile() ? '90%' : '79%'} alignItems='center'>
        <Title>Add Brand</Title>
        <AddEditBrandForm />
      </Surface>
    </Flex>
  )
}

export default AddBrand
