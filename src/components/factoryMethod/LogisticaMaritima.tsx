import Barco from "./barco";
import IFactory from "../../interfaces/components/FactoryMethod/IFactory"
import ProductProps from "../../interfaces/components/FactoryMethod/Iproduct";
import React from "react";


class LogisticaMaritima implements IFactory{
    createTransport(): ProductProps {
        return{
            render: (): React.ReactElement => <Barco />
        };
    }
}


export default LogisticaMaritima;