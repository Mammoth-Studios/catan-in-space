import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSlice } from "./login.slice";
import { RootState } from "../../../../redux/store";

export const Login: FC = () => {
  const dispatch = useDispatch();

  const loginForm = useSelector((state: RootState) => state.authLogin);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Dispatch the action to update the form input in the Redux store
    dispatch(loginSlice.actions.updateLoginForm({ field: name, value }));
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
            <input
              id='password-login'
              type='password'
              name='password'
              value={loginForm.password}
              onChange={handleInputChange}
              required
            />
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
