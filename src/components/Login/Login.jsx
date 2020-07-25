import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Login"} name={"Login"} component={"input"} />
        </div>
        <div>
          <Field
            placeholder={"Password"}
            name={"Password"}
            component={"input"}
          />
        </div>
        <div>
          <Field type={"checkbox"} name={"checkbox"} component={"input"} />
          Remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};
const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
const Login = (props) => {
  const onSubmit = (formData) => {};
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
