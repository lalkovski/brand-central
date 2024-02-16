import './ProductList.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

import { getProducts } from './product-list-api'
import { useAppContext, Product } from 'AppContext'
import Loader from 'components/Loader'

const ProductList = () => {
  const { products, setProducts, setDefaultProducts, setProductClicked, isLoading, setIsLoading } =
    useAppContext()

  const loadProducts = async () => {
    try {
      setIsLoading(true)
      const response = await getProducts()
      const productsData = response.data
      setProducts(productsData)
      setDefaultProducts(productsData)
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleProductClick = (product: Product) => {
    setProductClicked(product)
  }

  return (
    <ul className='product-list'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <b>Products:</b>
          {products.map((product: Product) => (
            <li key={product.id} className='product-item'>
              <Link to={`/products/${product.id}`} onClick={() => handleProductClick(product)}>
                <div className='basic-info'>
                  <span>{product.id}</span>
                  <h3>{product.title}</h3>
                  <p className={product.stock ? 'green' : 'red'}>
                    {product.stock ? 'Available' : 'Out of Stock'}
                  </p>
                </div>
                <p className='price'>${product.price}</p>
              </Link>
            </li>
          ))}
        </>
      )}
    </ul>
  )
}

export default ProductList
