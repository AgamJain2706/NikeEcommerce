import Breadcrumb from '../Components/Breadcrumb'
import ProductDisplay from '../Components/ProductDisplay'
import Description from '../Components/Description'
import { useParams } from 'react-router-dom'
import all_product from '../Constant/allProduct'
const SingleProduct = () => {
    const {ProductId} = useParams()
    const product = all_product.find((e)=>e.id === Number(ProductId))
    return (
        <div className='max-w-7xl mx-auto mb-32 mt-14 '>
            <Breadcrumb product={product} />
            <ProductDisplay  product={product} />
            <Description product={product} />
        </div>
    )
}

export default SingleProduct
