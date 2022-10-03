import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Input } from "../Components/Input";
import { Form } from "../Components/Form";
import { fetchAuth } from "../Requests/Auth";
import Cookies from "js-cookie";

function Login() {
  const { setIsLoggedIn, auth } = useAuth();

  console.log(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: auth.firstName,
      password: auth.password,
    },
    mode: "onBlur",
  });

  const handleAuth = async (data) => {
    const authResponse = await fetchAuth(data.firstName, data.password);
    if (authResponse.jwt) {
      setIsLoggedIn(true);
      Cookies.set("user", authResponse.jwt);
    } else {
      alert("Wrong name or password");
    }
  };

  const onSubmit = (data) => {
    handleAuth(data);

    navigate("/");
  };
  return (
    <div className="bg-[#f5f5f5] bg-cover px-[64px] pt-[62px] h-full">
      <div className="font-raleway font-extrabold text-[20px]">
        <h1 className="text-[#212121] text-[36px] mb-[40px]">Log In</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 mb-[24px]">
            <div className="flex">
              <label className="w-1/5">First Name</label>
              <Input {...register("firstName", { required: true })} />
            </div>

            <div className="flex">
              <label className="w-1/5">Password</label>
              <Input
                id="password"
                {...register("password", {
                  required: "This field could not be empty",
                })}
              />
            </div>
            <div>{errors?.password && <p>{errors?.password?.message}</p>}</div>
          </div>
          <button className="w-full bg-[#D34742] border-[4px] border-[#FFFFFF] rounded-l focus:outline outline-4 outline-[#483D69] text-[#FFFFFF] text-[16px] h-[48px] cursor-pointer">
            LOG IN
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
