import AbstractInputFactory from "../../interfaces/components/AbstractFactory/AbstractInputFactory";
import ProductInput from "../../interfaces/components/AbstractFactory/IProductInput";
import InputComponent from "./InputComponent";
import ProductInputProps from "../../interfaces/components/AbstractFactory/ProductInputProps";

const FunctionInputFactory = (props: ProductInputProps) => {
  const {title, value, placeholder, type} = props;

  class InputFactory implements AbstractInputFactory {
    createInput(): ProductInput {
      return {
        render: (): React.ReactElement => (
          <InputComponent
            type= {type}
            value= {value}
            placeholder= {placeholder}
            title= {title}
          />
        ),
      };
    }
  }

  return new InputFactory();
};

export default FunctionInputFactory;
