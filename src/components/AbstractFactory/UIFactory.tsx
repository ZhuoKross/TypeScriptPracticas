import React from "react";
import AbstractUI from "../../interfaces/components/AbstractFactory/AbstractUI";
import ProductForm from "../../interfaces/components/AbstractFactory/IProductForm";
import FormComponent from "./FormComponent";
import FunctionInputFactory from "./InputFactory";
import FunctionButtonFactory from "./ButtonFactory";
import ProductInputProps from "../../interfaces/components/AbstractFactory/ProductInputProps";
import ProductButtonProps from "../../interfaces/components/AbstractFactory/ProductButtonProps";


// Props for the inputs elements
const propsInputExample: ProductInputProps = {title: "ejemplo:", placeholder: "escribe aquí", type: "email"}
const propsInputName: ProductInputProps = {title: "Nombre:", placeholder: "Escribe tu nombre", type: "text"}

// Props for the button elements
const propsButtonClose: ProductButtonProps = {title: "Cerrar", type: "Close"}


// Creating the input component for the example
const inputfactory = FunctionInputFactory(propsInputExample);
const inputExample = inputfactory.createInput();
const inputExampleElement = inputExample.render();


// Creating the input for the name field
const inputfactory2 = FunctionInputFactory(propsInputName);
const inputName = inputfactory2.createInput();
const inputNameElement = inputName.render();


// Button Component
const buttonFactory = FunctionButtonFactory(propsButtonClose);
const buttonClose = buttonFactory.createButton();
const buttonCloseElement = buttonClose.render();



class UIFactory implements AbstractUI{
    createForm(): ProductForm {
        return{
            render: ():React.ReactElement =>  <FormComponent fieldsData={[inputExampleElement, inputNameElement, buttonCloseElement]}/> 
        }
    }
}


export default UIFactory;