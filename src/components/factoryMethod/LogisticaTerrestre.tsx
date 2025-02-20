import Camion from "./Camion"
import IFactory from "../../interfaces/components/FactoryMethod/IFactory"
import ProductProps from "../../interfaces/components/FactoryMethod/Iproduct";
import React from "react";


class LogisticaTerreste implements IFactory{
  createTransport(): ProductProps {
    return{
      render: ():React.ReactElement => <Camion />
    }
  }
}




export default LogisticaTerreste;