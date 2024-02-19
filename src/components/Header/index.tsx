import { Button } from 'components/Button'
import Flex from 'components/Flex'
import { Sort } from 'components/Sort'
import { useLocation, useNavigate } from 'react-router-dom'
import ROUTES from 'routing/routes'
import { Logo } from './style'

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Flex width='100%' height='50px' justifyContent='center'>
      <Flex width='80%' justifyContent='space-between' alignItems='center'>
        <Logo onClick={() => navigate(ROUTES.ROOT)}>
          Brand <span>Central</span>
        </Logo>
        {location.pathname !== ROUTES.BRAND_ADD && (
          <Flex alignItems='center'>
            <Sort />
            <Button onClick={() => navigate(ROUTES.BRAND_ADD)} margin='0 0 0 10px' isOutlined>
              Add Brand
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}
