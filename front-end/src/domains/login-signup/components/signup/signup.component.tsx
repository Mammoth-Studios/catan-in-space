import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupSlice } from "./signup.slice";
import { RootState } from "../../../../redux";
import eyeOpenIcon from "../../assets/images/eye-show.svg";
import eyeClosedIcon from "../../assets/images/eye-off.svg";
// import clickIcon from "../../assets/images/click-svgrepo-com.svg";

interface SignupProps {
  activeForm: string;
}
export const Signup: FC<SignupProps> = () => {
  const dispatch = useDispatch();
  const signupForm = useSelector((state: RootState) => state.authSignup);

  // State to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Dispatch the action to update the form input in the Redux store
    dispatch(signupSlice.actions.updateSignupForm({ field: name, value }));
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <button
        type='button'
        id='signup-btn-switch'
        className='switcher switcher-signup'
      >
        Signup
      </button>
      <form className='form form-signup'>
        <fieldset>
          <div className='input-block'>
            <label htmlFor='email-signup'>E-mail/Username</label>
            <input
              id='email-signup'
              type='email'
              name='email'
              value={signupForm.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='input-block'>
            <label htmlFor='password-signup'>Password</label>
            <div className='password-input-container'>
              <input
                id='password-signup'
                type={showPassword ? "text" : "password"}
                name='password'
                value={signupForm.password}
                onChange={handleInputChange}
                required
              />
              <button
                type='button'
                className='toggle-password-button'
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <img src={eyeOpenIcon} alt='Hide' />
                ) : (
                  <img src={eyeClosedIcon} alt='Show' />
                )}
              </button>
            </div>
          </div>
        </fieldset>
        <button type='submit' className='form-btn btn-signup'>
          Signup
          <i className='fa-solid fa-arrow-right-to-bracket fa-sm'></i>
        </button>
      </form>{" "}
    </>
  );
};
