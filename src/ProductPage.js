import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const params = useParams()
  console.log(params)

  return (
    <div>
      Haz una peticion al servidor del producto con id: {params.productId}
    </div>
  )
}

export default ProductPage
