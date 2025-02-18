import ProductProps from "../../interfaces/components/Iproduct";


const Barco: React.FC<ProductProps> = ({nameTransport, repartir}) => {
    return (
        <div>
            <h2>{nameTransport}</h2>
            <button onClick={repartir}>
                Tipo de transporte
            </button>
        </div>
    ); 
}


export default Barco;
