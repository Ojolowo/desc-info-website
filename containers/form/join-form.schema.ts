import * as yup from "yup";

export const schema = yup.object().shape({
   firstName: yup.string().required("First Name is a required field"),
   lastName: yup.string().required("Last Name is a required field"),
   email: yup.string().email().required("Email is a required field"),
   telephone: yup.string().required("Telephone contact is a required field"),
   password: yup.string().required("Password is a required field"),
   specialization: yup.string().required("Please select your field"),
});
