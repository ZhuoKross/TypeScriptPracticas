import ProductButtonProps from "../../interfaces/components/AbstractFactory/ProductButtonProps";


const ButtonComponent: React.FC<ProductButtonProps> = ({type, title}) => {
    const typeBtn = type;


    return(
        <div>
            {typeBtn === "Close" ? 
            <button className="bg-green-600 text-white p-2 text-center hover:bg-green-700 cursor-pointer" onClick={(e) => e.preventDefault()}>
                {title}
            </button>

            : typeBtn === "Submit" ?
            <button className=" bg-blue-600 text-white p-2 text-center hover:bg-blue-700 cursor-pointer" onClick={(e) => e.preventDefault()}>
                {title}
            </button>
            :
            <button></button>
            }
        </div>
    ); 
}


export default ButtonComponent;