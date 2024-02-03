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
export const Login = () => (
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
          <input id='email-login' type='email' required />
        </div>
        <div className='input-block'>
          <label htmlFor='password-login'>Password</label>
          <input id='password-login' type='password' required />
        </div>
      </fieldset>
      <button type='submit' className='form-btn btn-login'>
        Login
        <i className='fa-solid fa-arrow-right-to-bracket fa-sm'></i>
      </button>
    </form>{" "}
  </>
);
