import { FC, useEffect } from "react";
import { Login } from "@domains/login-signup/components/login";
import { Signup } from "@domains/login-signup/components/signup";
import { useDispatch, useSelector } from "react-redux";

import { setActiveForm } from "./login-signup-view.slice";
import { RootState } from "../../redux/store";
import "./login-signup-view.style.scss";

export const LoginSignupView: FC = () => {
  const dispatch = useDispatch();
  const activeForm = useSelector(
    (state: RootState) => state.activeForm.activeForm
  );

  useEffect(() => {
    let switchers: NodeListOf<HTMLElement>;

    const switchForm = (clickedItem: HTMLElement) => {
      if (clickedItem.parentElement) {
        const switchers = document.querySelectorAll(".switcher");
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        clickedItem.parentElement.classList.add("is-active");
        dispatch(setActiveForm(clickedItem.id));
      }

      return () => {
        switchers.forEach((item) => {
          item.removeEventListener("click", () => switchForm(item));
        });
      };
    };
  }, [dispatch]);

  return (
    <section id='login-signup-container'>
      <div
        id='login'
        className={`form-wrapper ${activeForm === "login" ? "is-active" : ""}`}
      >
        <Login activeForm={activeForm} />
      </div>
      <div
        id='signup'
        className={`form-wrapper ${activeForm === "signup" ? "is-active" : ""}`}
      >
        <Signup activeForm={activeForm} />
      </div>
    </section>
  );
};
