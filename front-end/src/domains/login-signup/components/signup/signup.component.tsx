import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupSlice } from "./signup.slice";
import { RootState } from "../../../../redux/store";

export const Signup: FC = () => {
  const dispatch = useDispatch();
  const signupForm = useSelector((state: RootState) => state.authSignup);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Dispatch the action to update the form input in the Redux store
    dispatch(signupSlice.actions.updateSignupForm({ field: name, value }));
  };
  return (
    <>
      <button
        type='button'
        id='signup-btn-switch'
        className='switcher switcher-signup'
      >
        Sign Up
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
            <input
              id='password-signup'
              type='password'
              name='password'
              value={signupForm.password}
              onChange={handleInputChange}
              required
            />
          </div>
        </fieldset>
        <button type='submit' className='btn-signup'>
          Sign Up
          <i className='fa-solid fa-user-plus fa-sm'></i>
        </button>
      </form>
    </>
  );
};
