import Camion from "./Camion";
import IFactory from "../../interfaces/components/IFactory"



const LogisticaTerreste: React.FC<IFactory> = ({createTransport}) => {
  return(
        <Camion nameTransport="Camion" repartir={createTransport}></Camion>
    );
}


export default LogisticaTerreste;