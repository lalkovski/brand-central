import Flex from 'components/Flex'
import { useNavigate } from 'react-router-dom'
import ROUTES from 'routing/routes'
import { Logo } from './style'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <Flex width='100%' height='50px' justifyContent='center'>
      <Flex width='80%' justifyContent='space-between' alignItems='center'>
        <Logo onClick={() => navigate(ROUTES.ROOT)}>
          Brand <span>Central</span>
        </Logo>
      </Flex>
    </Flex>
  )
}
