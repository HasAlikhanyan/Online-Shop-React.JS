import Products from "../../products/Products";
import ProductModal from "../../productModal/ProductModall";
import { useState } from "react";

function ProductDetails ({data}){
    const [isOpenProductModal, setIsOpenProductModal] = useState(false);
    const [productImage, setProductImage] = useState(null);
    const [productPrice, setProductPrice] = useState(null);
    const [productDescription, setProductDescription] = useState(null);
    const [productId, setProductId] = useState(null);

    const showProductModal = (image, price, description, id) => {
        setIsOpenProductModal(true);
        setProductImage(image);
        setProductPrice(price);
        setProductDescription(description);
        setProductId(id);
    }
    
    const hideProductModal = () => {
        setIsOpenProductModal(false);
    }
    return (
        <>
            <Products data={data} showProductModal={showProductModal}/>
            {isOpenProductModal && 
                <ProductModal
                    hideModal = {hideProductModal}
                    image = {productImage}
                    price = {productPrice}
                    description = {productDescription}
                    id = {productId}
                />
            }
        </>
    )
}

export default ProductDetails