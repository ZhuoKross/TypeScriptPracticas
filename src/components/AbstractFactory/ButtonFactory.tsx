import React from "react";
import ProductButton from "../../interfaces/components/AbstractFactory/ProductButton";
import AbstractButtonFactory from "../../interfaces/components/AbstractFactory/AbstractButtonFactory";
import ButtonComponent from "./ButtonComponent";
import ProductButtonProps from "../../interfaces/components/AbstractFactory/ProductButtonProps";


const FunctionButtonFactory = (props: ProductButtonProps) =>{


    const {type, title} = props;

    class ButtonFactory implements AbstractButtonFactory{
        createButton(): ProductButton {
            return{
                render: ():React.ReactElement => <ButtonComponent type={type} title={title} />
            }
        }
    }


    return new ButtonFactory
}


export default FunctionButtonFactory;