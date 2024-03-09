import { FC, useEffect } from "react";
import { Login } from "@domains/login-signup/components/login";
import { Signup } from "@domains/login-signup/components/signup";

import "./login-signup-view.style.css";

export const LoginSignupView: FC = () => {
  return (
    <section className='login-signup-view'>
      <div>
        <Login />
      </div>
      <div>
        <Signup />
      </div>
    </section>
  );
};
