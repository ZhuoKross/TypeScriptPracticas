import React from "react";
import ProductButton from "../../interfaces/components/AbstractFactory/IProductButton";
import AbstractButtonFactory from "./AbstractButtonFactory";
import ButtonComponent from "./ButtonComponent";


class ButtonFactory implements AbstractButtonFactory{
    createButton(): ProductButton {
        return{
            render: ():React.ReactElement => <ButtonComponent type="Close" title="Cerrar"/>
        }
    }
}


export default ButtonFactory;