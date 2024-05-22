import * as React from "react";

import InputField from "@/components/InputField";
import CardComponent from "@/components/CardComponent";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { SERVER_LINK } from "@/constant";
import AlertBox from "@/components/AlertBox";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signin() {
  const { register, handleSubmit } = useForm();
  const [response, setResponse] = React.useState("");
  const [error, setError] = React.useState("")
  const navigate = useNavigate()
  const [alertDialouge, setAlertDialouge] = React.useState(false)

  const signin = async (data) => {
    try {
      // console.log(data);
      const res = await axios.post(
        `${SERVER_LINK}/user/email-verification`,
        data
      );
      if (res.status === 200) {
        console.log(res.data.message)
        setResponse(res.data.message)
        setAlertDialouge(true)
      }
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message)
      setAlertDialouge(true)
    }
  };

  return (
    <>
    {response && <AlertBox open={alertDialouge} setAlertDialouge={setAlertDialouge} title={"Verification Email"} description={response} />}
    {error && <AlertBox open={alertDialouge} setAlertDialouge={setAlertDialouge} title={"Something Is Wrong"} description={error} />}
      <CardComponent
        title={"Create An Account"}
        description={"Share Your Thoughts Anonmously"}
      >
        <form onSubmit={handleSubmit(signin)}>
          <div className="space-y-5 flex flex-col justify-center">
            <InputField
              label={"First Name"}
              type={"text"}
              {...register("firstName")}
            />
            <InputField
              label={"Last Name"}
              type={"text"}
              {...register("lastName")}
            />
            <InputField label={"Email"} type={"email"} {...register("email")} />
            <InputField
              label={"Password"}
              type={"password"}
              {...register("password")}
            />
            <InputField
              label={"Phone"}
              type={"text"}
              {...register("phone")}
            />
            <InputField
              label={"Designation"}
              type={"text"}
              {...register("designation")}
            />
            <Button>
              <button type="submit">Create</button>
            </Button>
          </div>
        </form>
        <div className="flex justify-center mt-5 opacity-70 text-[14px]">
          <p>Already Have An Account? <Link to={"/login"} className="underline">Log In</Link></p>
        </div>
      </CardComponent>
    </>
  );
}

export default Signin;
