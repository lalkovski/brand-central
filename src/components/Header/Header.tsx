import Flex from 'components/Flex'
import { Logo } from './style'

const Header = () => {
  return (
    <Flex width='100%' height='50px' justifyContent='center'>
      <Flex width='80%' justifyContent='space-between' alignItems='center'>
        <Logo>
          Brand <span>Central</span>
        </Logo>
        <button>Add Brand</button>
      </Flex>
    </Flex>
  )
}

export default Header
