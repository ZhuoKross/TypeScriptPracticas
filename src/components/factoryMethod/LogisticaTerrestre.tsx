import Camion from "./Camion"
import IFactory from "../../interfaces/components/IFactory"
import ProductProps from "../../interfaces/components/Iproduct";
import React from "react";


class LogisticaTerreste implements IFactory{
  createTransport(): ProductProps {
    return{
      render: ():React.ReactElement => <Camion />
    }
  }
}




export default LogisticaTerreste;