import { useState, useEffect, useRef } from 'react'
import './ProductItem.scss'
import { useAppContext } from 'AppContext'
import notfoundpic from 'static/img-not-found.jpg'
import Loader from 'components/Loader'

const ProductItem = () => {
  const { productClicked, isLoading } = useAppContext()
  const [scrollPosition, setScrollPosition] = useState(0)

  const imgRef = useRef<HTMLImageElement | null>(null)

  // const loadProduct = async (id: string) => {
  //   try {
  //     setIsLoading(true);
  //     const response = await getProduct(id);
  //     const productData = response.data;
  //     setSingleProduct(productData);
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (id) {
  //     loadProduct(id);
  //   }
  // }, [id]);
  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }
  // Product moves on scroll effect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const moveDiv = {
    transform: `translateY(${scrollPosition}px)`,
  }

  // Loading and no product renders
  if (!productClicked) {
    return <div className='no-product'>Plese select a product 😊.</div>
  }

  return (
    <div className='product-display-container' style={moveDiv}>
      {isLoading ? (
        <Loader /> // Render the loader if isLoading is true
      ) : (
        <div className='product'>
          <div className='title'>
            <h3>{productClicked.title}</h3>
            <div className='price-container'>
              <p className={productClicked.stock ? 'green' : 'red'}>
                {productClicked.stock ? 'Available' : 'Out of Stock'}
              </p>
              <p className='price'>${productClicked.price}</p>
            </div>
          </div>
          <div className='picture'>
            <img
              ref={imgRef}
              src={productClicked.picture ? productClicked.picture : notfoundpic}
              alt={productClicked.title}
              onError={() => {
                if (imgRef.current) {
                  imgRef.current.src = notfoundpic
                }
              }}
            />
          </div>
          <div>
            <p>{productClicked.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductItem
