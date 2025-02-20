import ProductInput from "./IProductInput"

export default interface AbstractInputFactory {
    createInput(): ProductInput;
}