import ProductProps from "../../interfaces/components/Iproduct"



const Camion: React.FC<ProductProps> = ({nameTransport, repartir}) => {
    
    return(
        <div>
            <h2>{nameTransport}</h2>
            <button onClick={repartir}>
                tipo de transporte 
            </button>
        </div>
    );

}


export default Camion;