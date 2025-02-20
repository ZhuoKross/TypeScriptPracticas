import AbstractInputFactory from "../../interfaces/components/AbstractFactory/AbstractInputFactory";
import ProductInput from "../../interfaces/components/AbstractFactory/IProductInput";
import InputComponent from "./InputComponent";



class InputFactory implements AbstractInputFactory{
    createInput(): ProductInput {
        return{
            render: (): React.ReactElement => <InputComponent type="text" value="textExample" placeholder="Escribe aqui" title="Nombre:"/>
        }
    }
}


export default InputFactory;