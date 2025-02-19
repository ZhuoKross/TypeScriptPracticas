import LogisticaMaritima from "./LogisticaMaritima";
import LogisticaTerreste from "./LogisticaTerrestre";
import LogisticaAerea from "./LogisticaAerea";


const LogisticComponent: React.FC = () => {
    
    const logisticaTerrestreFactory = new LogisticaTerreste();
    const camionProduct = logisticaTerrestreFactory.createTransport();

    const logisticaMaritimaFactory = new LogisticaMaritima();
    const barcoProduct = logisticaMaritimaFactory.createTransport();

    const logisticaAereaFactory = new LogisticaAerea();
    const avionProduct = logisticaAereaFactory.createTransport();
    

    const ElementCamion = camionProduct.render();
    const ElementBarco = barcoProduct.render();
    const ElementoAvion = avionProduct.render();

    return(
        <>
          {ElementBarco}
          {ElementCamion}
          {ElementoAvion}
        </>
    );
}


export default LogisticComponent;