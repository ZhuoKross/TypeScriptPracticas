import LogisticaMaritima from "./LogisticaMaritima";
import LogisticaTerreste from "./LogisticaTerrestre";



const LogisticComponent: React.FC = () => {
    
    const behaviourDeliverCamion = (): string => {
        return "transporta por via terrestre";
      };
    
      const behaviourDeliverBarco = (): string => {
        return "transporta por via maritima";
      };


    return(
        <>
            <LogisticaMaritima createTransport={behaviourDeliverBarco}></LogisticaMaritima>
            <LogisticaTerreste createTransport={behaviourDeliverCamion}></LogisticaTerreste>
        </>
    );
}


export default LogisticComponent;