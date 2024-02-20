import Flex from 'components/Flex'
import { Surface } from 'components/Surface'
import { Message } from './style'
import TomCat from 'img/tom_cat.jpg'

const NotFound = () => {
  return (
    <Flex
      backgroundColor='#F4F4F4'
      justifyContent='center'
      alignItems='flex-start'
      width='100%'
      height='95vh'
    >
      <Surface hasLeftMargin={false} width='79%' alignItems='center' justifyContent='center'>
        <Message>The page you are looking for doesn't exist.</Message>
        <img src={TomCat} alt='tom-cat' height='400px' />
      </Surface>
    </Flex>
  )
}

export default NotFound
