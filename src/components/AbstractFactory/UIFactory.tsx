import React from "react";
import AbstractUI from "../../interfaces/components/AbstractFactory/AbstractUI";
import ProductForm from "../../interfaces/components/AbstractFactory/IProductForm";
import FormComponent from "./FormComponent";
import InputFactory from "./InputFactory";
import ButtonFactory from "./ButtonFactory";



// Creating the input component
const inputFactory = new InputFactory();
const inputText = inputFactory.createInput();
const inputTextElement = inputText.render();


// Button Component
const buttonFactory = new ButtonFactory();
const button = buttonFactory.createButton();
const buttonElement = button.render();


class UIFactory implements AbstractUI{
    createForm(): ProductForm {
        return{
            render: ():React.ReactElement =>  <FormComponent fieldsData={[inputTextElement, buttonElement]}/> 
        }
    }
}


export default UIFactory;