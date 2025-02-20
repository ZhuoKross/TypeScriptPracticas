import Avion from "./Avion";
import IFactory from "../../interfaces/components/FactoryMethod/IFactory";
import ProductProps from "../../interfaces/components/FactoryMethod/Iproduct";
import React from "react";


class LogisticaAerea implements IFactory{
    createTransport(): ProductProps {
        return{
            render: ():React.ReactElement => <Avion />
        }
    }
}


export default LogisticaAerea;