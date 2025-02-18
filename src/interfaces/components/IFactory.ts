import ProductProps from "./Iproduct"

export default interface IFactory {
    createTransport: () => ProductProps
}