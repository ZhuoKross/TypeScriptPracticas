import Avion from "./Avion";
import IFactory from "../../interfaces/components/IFactory";
import ProductProps from "../../interfaces/components/Iproduct";
import React from "react";


class LogisticaAerea implements IFactory{
    createTransport(): ProductProps {
        return{
            render: ():React.ReactElement => <Avion />
        }
    }
}


export default LogisticaAerea;