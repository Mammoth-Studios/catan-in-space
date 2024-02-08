import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSlice } from "./login.slice";
import { RootState } from "../../../../redux/store";
import eyeOpenIcon from "../../assets/images/eye-show.svg";
import eyeClosedIcon from "../../assets/images/eye-off.svg";
// import clickIcon from "../../assets/images/click-svgrepo-com.svg";

interface LoginProps {
  activeForm: string;
}

export const Login: FC<LoginProps> = ({ activeForm }) => {
  const dispatch = useDispatch();
  const loginForm = useSelector((state: RootState) => state.authLogin);

  // State to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Dispatch the action to update the form input in the Redux store
    dispatch(loginSlice.actions.updateLoginForm({ field: name, value }));
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <button
        type='button'
        id='login-btn-switch'
        className='switcher switcher-login'
      >
        Login
      </button>
      <form className='form form-login'>
        <fieldset>
          <div className='input-block'>
            <label htmlFor='email-login'>E-mail/Username</label>
            <input
              id='email-login'
              type='email'
              name='email'
              value={loginForm.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='input-block'>
            <label htmlFor='password-login'>Password</label>
            <div className='password-input-container'>
              <input
                id='password-login'
                type={showPassword ? "text" : "password"}
                name='password'
                value={loginForm.password}
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
        <button type='submit' className='form-btn btn-login'>
          Login
          <i className='fa-solid fa-arrow-right-to-bracket fa-sm'></i>
        </button>
      </form>{" "}
    </>
  );
};
