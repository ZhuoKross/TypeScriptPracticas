import ProductInputProps from "../../interfaces/components/AbstractFactory/ProductInputProps";



const InputComponent: React.FC<ProductInputProps> = ({title, value, placeholder, type}) => {
    return(
        <div className="text-white ms-6">
            <label className="text-white font-bold">{title}</label><br />
            <input type={type} value={value} placeholder={placeholder} className="mt-4 border "/>
        </div>
    );
}



export default InputComponent;