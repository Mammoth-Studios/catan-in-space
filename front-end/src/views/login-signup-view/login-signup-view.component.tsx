import { FC, useState, useEffect } from "react";
import { Login } from "@domains/login-signup/components/login";
import { Signup } from "@domains/login-signup/components/signup";

// This will be used to compose all the components from this feature

// The basic UI of the Login / Signup views needs to have:

// Two input fields

// email / username

// password

// this input should have a logo that can hide / show the password types into the input

// Title of the view i.e. “Login” or “Signup”

// This title should be programatically grabbed from the navigation prop of the route in the react-router library.

// The Signup / Login should be two different views.

// Created a nested Router that switches between signup / login

// Store the login / signup inputs data in the Redux store.

export const LoginSignupView: FC = () => {
  const [activeForm, setActiveForm] = useState("login");

  useEffect(() => {
    const switchers = document.querySelectorAll(".switcher");

    const switchForm = (clickedItem) => {
      // Make sure clickedItem exists and has a parent element
      if (clickedItem && clickedItem.parentElement) {
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        clickedItem.parentElement.classList.add("is-active");
        setActiveForm(clickedItem.id); // Assuming that clickedItem.id is either "login" or "signup"
      }
    };

    switchers.forEach((item) => {
      // Make sure item has an event listener attached only once
      item.addEventListener("click", () => switchForm(item));
    });
  }, []);

  return (
    <section id='login-signup-container'>
      <div
        id='login'
        className={`form-wrapper ${activeForm === "login" ? "is-active" : ""}`}
      >
        <Login />
      </div>
      <div
        id='signup'
        className={`form-wrapper ${activeForm === "signup" ? "is-active" : ""}`}
      >
        <Signup />
      </div>
    </section>
  );
};
