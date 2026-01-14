import { useParams, Link } from 'react-router-dom'

export default function ProductDetailPage() {
    const params = useParams()

    return (
        <>
        <h1>Lalalal product</h1>
        <p>{params.productId}</p>
        {/* To go back, '..' can be used as a path */}
        {/* Without the relative="path", it goes back to the root ( / ), and not /products */}
        <p><Link to=".." relative="path">Back</Link></p>
        </>
    )
}