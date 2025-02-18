import Barco from "./barco";
import IFactory from "../../interfaces/components/IFactory"


const LogisticaMaritima: React.FC<IFactory> = ({createTransport}) => {
    return(
        <Barco nameTransport="Barco" repartir={createTransport}></Barco>
    );
}


export default LogisticaMaritima;