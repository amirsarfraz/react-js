import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './features/Auth/Login/loginForm';
import RegisterPage from './features/Auth/register/register';

// Student Component Rendered
const App = () => (
  <>
  <LoginForm/>
  {/* <RegisterPage/> */}
   

  </>
);

// Consolidate Rendering
ReactDOM.render(<App />, document.getElementById('root'));
