import Flex from 'components/Flex'
import { Loader } from 'components/Loader'

export const FullScreenLoader = () => {
  return (
    <Flex width='100%' height='90vh' justifyContent='center' alignItems='center'>
      <Loader />
    </Flex>
  )
}
