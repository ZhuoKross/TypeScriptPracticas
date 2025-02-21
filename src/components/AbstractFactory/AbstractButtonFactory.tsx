import ProductButton from "../../interfaces/components/AbstractFactory/IProductButton";

export default interface AbstractButtonFactory{
    createButton(): ProductButton;
}