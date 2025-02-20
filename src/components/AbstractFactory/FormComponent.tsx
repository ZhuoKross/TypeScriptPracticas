import React from "react";
import ProductFormProps from "../../interfaces/components/AbstractFactory/ProductFormProps";



const FormComponent: React.FC<ProductFormProps> = ({validateData, sendData, fieldsData})=> {

    return(
        <div className="bg-zinc-600 h-full w-1/3 rounded-2xl">
            <form className="flex flex-col">
                {fieldsData}
            </form>
        </div>
    );
}


export default FormComponent;