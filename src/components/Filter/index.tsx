import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'components/Button'
import Flex from 'components/Flex'
import { Modal } from 'components/Modal'
import { FilterBrands, GetSelectedBrand, RemoveFilteredBrands } from 'data/Brand/actions'
import { selectCategories } from 'data/Category/selectors'
import { useModal } from 'hooks/useModal'
import { IBrand } from 'models/Brand'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { AppDispatch } from 'store'
import { FilterWrapper, SelectWrapper, StyledIcon, Text, Title } from './style'

export const Filter = () => {
  const dispatch: AppDispatch = useDispatch()
  const [isOpen, toggleModal, closeModal] = useModal()
  const categories = useSelector(selectCategories)
  const [category, setCategory] = useState<{ value: number; label: string } | null>(null)
  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }))

  const handleReset = () => {
    setCategory(null)
    dispatch(RemoveFilteredBrands())
    closeModal()
  }

  const handleFilter = async () => {
    if (category && category.value) {
      dispatch(FilterBrands(category.value))
      dispatch(GetSelectedBrand({} as IBrand))
      closeModal()
    } else {
      dispatch(RemoveFilteredBrands())
      closeModal()
    }
  }

  return (
    <>
      <FilterWrapper onClick={toggleModal} width='58px' justifyContent='space-between'>
        <Text>Filter</Text>
        <FontAwesomeIcon icon={faFilter} color='#ae0000' />
      </FilterWrapper>
      <Modal isOpen={isOpen} handleClose={closeModal}>
        <Flex width='100%' height='100%' flexDirection='column' alignItems='center'>
          <Flex alignItems='center' margin='0 0 40px 0' width='100%' justifyContent='space-between'>
            <span></span>
            <Title>Filter Brands</Title>
            <StyledIcon icon={faXmark} color='#333333' onClick={closeModal} />
          </Flex>
          <Flex width='80%' flexDirection='column'>
            <SelectWrapper>
              <Select
                isClearable
                value={category}
                options={categoryOptions}
                name='category'
                onChange={(value) => {
                  setCategory(value)
                }}
                placeholder='Filter by category'
              />
            </SelectWrapper>
            <Flex width='100%' justifyContent='flex-end' margin='40px 0 0 0'>
              <Button isOutlined onClick={handleReset}>
                Reset
              </Button>
              <Button margin='0 0 0 20px' onClick={handleFilter}>
                Filter
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Modal>
    </>
  )
}
