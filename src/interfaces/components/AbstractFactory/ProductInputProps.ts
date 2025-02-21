import InputType from "./types/InputType"


export default interface ProductInputProps {
    title: string
    placeholder: string
    value?: string 
    type: InputType
}