import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { useForm, Controller } from "react-hook-form";
import { Input } from "components/input";
import { SelectInput } from "components/select";
import { TextBlock, TextBrief, TextHeading } from "components/typography";
import { InputWrapper } from "styles/form";
import { db } from "utils/firebase";
import { specializations } from "utils/specializations";
import { FormWrapper, Svg } from "./form.styles";
import { IJoinForm } from "./i-forn";
import { schema } from "./join-form.schema";

const JoinForm = ({ handleClose }) => {
   const [isLoading, setIsLoading] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
      control,
      watch,
   } = useForm<IJoinForm>({
      resolver: yupResolver(schema),
      mode: "onChange",
   });

   const onSubmit = async (values) => {
      try {
         setIsLoading(true);
         await addDoc(collection(db, "members"), values);
         alert("successful");
         handleClose();
      } catch (error) {
         alert(error);
      } finally {
         setIsLoading(false);
      }
   };

   function validate() {
      return Object.keys(errors).length > 0 || Object.values(watch()).length < 1 || isLoading;
   }

   return (
      <FormWrapper>
         <div className="left">
            <Svg src="/images/connect.png"></Svg>
         </div>
         <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <TextBlock>
               <TextHeading size={24} weight={800} style={{ color: "#000" }}>
                  Join Desc Community
               </TextHeading>
               <TextBrief style={{ fontSize: 14, marginTop: 10, color: "#000" }}>
                  Connect I Learn I Grow
               </TextBrief>
            </TextBlock>
            <InputWrapper className="grid-2-2 mt-13">
               <Input
                  label="First Name"
                  id="firstName"
                  type="text"
                  {...register("firstName")}
                  error={errors.firstName?.message}
               />
               <Input
                  label="Last Name"
                  id="lastName"
                  type="text"
                  {...register("lastName")}
                  error={errors.lastName?.message}
               />
            </InputWrapper>
            <InputWrapper>
               <Input
                  label="Email Address"
                  id="email"
                  type="text"
                  {...register("email")}
                  error={errors.email?.message}
               />
            </InputWrapper>

            <InputWrapper>
               <Input
                  label="Telephone"
                  id="phone"
                  type="text"
                  {...register("telephone")}
                  error={errors.telephone?.message}
               />
            </InputWrapper>
            <InputWrapper>
               <Input
                  endAdornment
                  label="Password"
                  id="password"
                  type="password"
                  {...register("password")}
                  error={errors.password?.message}
               />
            </InputWrapper>
            <InputWrapper>
               <Controller
                  control={control}
                  name="specialization"
                  render={({ field: { onChange } }) => (
                     <>
                        <SelectInput
                           id="speciallization"
                           label="Join as"
                           placeholder="Select Specialization"
                           onChange={(data: any) => onChange(data?.value)}
                           required={true}
                           error={errors.specialization?.message}
                           options={specializations}
                           defaultValue={null}
                        />
                     </>
                  )}
               />
            </InputWrapper>
            <InputWrapper>
               <button
                  type="submit"
                  id="btn"
                  disabled={validate()}
                  style={{
                     width: "100%",
                     height: 50,
                     background: "#08072e",
                     opacity: isLoading ? 0.5 : 1,
                     borderRadius: 6,
                     color: "#fff",
                     cursor: `${isLoading ? "not-allowed" : "pointer"}`,
                  }}
               >
                  Sign Up Now
               </button>
            </InputWrapper>
         </form>
      </FormWrapper>
   );
};

export { JoinForm };
