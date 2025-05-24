
import * as yup from "yup"

export const validation = yup.object().shape({
    saxeli: yup.string().required("რამე ჩაწერე, ბიჭო!!").min(5, "ასოები გენანება? მიამატე, რა..").max(15, "ნუ გაუტიე!"),
    paroli: yup.string().required("რამე ჩაწერე, ბიჭო!!").min(5, "ასოები გენანება? მიამატე, რა..").max(15, "ნუ გაუტიე!"),
    email: yup.string().required("რამე ჩაწერე, ბიჭო!!").email("ძაღღღლუკა დაუწერე"),
})