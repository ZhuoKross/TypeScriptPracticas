import IFactory from "../../interfaces/components/IFactory";



const LogisticFactory: React.FC<IFactory> = ({createTransport}) => {
    return(
        <div>
            <h2>¿Cuál medio de transporte prefieres?</h2>
            <button onClick={createTransport}>Transporte maritimo</button>
            <button onClick={createTransport}>Transporte terrestre</button>
        </div>
    );
}


export default LogisticFactory;
