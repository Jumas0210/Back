import { object, string, number } from "yup";

const product = object({
    name: string().required("El nombre es obligatorio"),
    description : string(),
    price : number("El precio debe de ser un dato numerico").required("El precio es obligatorio"),
    image : string().required("la imagen es obligatoria")
}); 


export default product