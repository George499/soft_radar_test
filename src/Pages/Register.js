import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../AuthContext";
import { Input } from "../Components/Input";
import { Form } from "../Components/Form";
import { fetchRegister } from "../Requests/Register";

function Register() {
  const { registerInfo } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: registerInfo.firstName,
      phoneNumber: registerInfo.phoneNumber,
      email: registerInfo.email,
      password: registerInfo.password,
    },
    mode: "onBlur",
  });

  const handleRegister = async (data) => {
    const registerResponse = await fetchRegister(data);
    registerResponse.error
      ? alert(registerResponse.error.message)
      : alert("Register success, now you can log in");
  };

  const onSubmit = (data) => {
    handleRegister(data);
    reset();
  };
  return (
    <div className="bg-[#f5f5f5] bg-cover px-[64px] pt-[62px] h-full">
      <div className="font-raleway font-extrabold text-[20px]">
        <h1 className="text-[#212121] text-[36px] mb-[40px]">Register</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 mb-[24px]">
            <div className="flex">
              <label className="w-1/5">First Name</label>
              <Input {...register("firstName", { required: true })} />
            </div>
            <div className="flex">
              <label className="w-1/5">Phone number</label>
              <Input
                id="phoneNumber"
                {...register("phoneNumber", { required: true })}
              />
            </div>
            <div className="flex">
              <label className="w-1/5">Email</label>
              <Input id="email" {...register("email", { required: true })} />
            </div>
            <div className="flex">
              <label className="w-1/5">Password</label>
              <Input
                id="password"
                {...register("password", {
                  required: "could not be empty",
                })}
              />
            </div>
            <div>{errors?.password && <p>{errors?.password?.message}</p>}</div>
          </div>
          <button className="w-full bg-[#D34742] border-[4px] border-[#FFFFFF] rounded-l focus:outline outline-4 outline-[#483D69] text-[#FFFFFF] text-[16px] h-[48px] cursor-pointer">
            REGISTER
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
