import ProductButton from "./IProductButton"
import ProductCard from "./IProductCard"
import ProductForm from "./IProductForm"




export default interface AbstractUI{
    createForm(): ProductForm
    createCard?(): ProductCard
    createButton?(): ProductButton
}