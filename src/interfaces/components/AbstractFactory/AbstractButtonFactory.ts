import ProductButton from "./ProductButton"

export default interface AbstractButtonFactory {
    createButton(): ProductButton
}