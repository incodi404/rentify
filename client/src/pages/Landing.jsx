import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Landing() {
  return (
    <div className="flex justify-center items-center flex-col space-y-5">
      <h1 className="text-[3rem]">
        Make finding rent easy with <span>Rentify</span>
      </h1>
      <Link to="/signin">
        <Button className="px-3 py-[7px] rounded">Create An Account</Button>
      </Link>
    </div>
  );
}

export default Landing;
