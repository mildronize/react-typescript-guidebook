export const LoginActions = {
  Login: "login",
  LoginForm: "login-form",
  LoginCallback: "login-callback",
  LoginFailed: "login-failed",
  Profile: "profile",
  Register: "register",
};

const prefix = "/authentication";

export const ApplicationPaths = {
  DefaultLoginRedirectPath: "/",
  AuthorizationPrefix: prefix,
  LoginForm: `${prefix}/${LoginActions.LoginForm}`,
  Login: `${prefix}/${LoginActions.Login}`,
  //   LoginFailed: `${prefix}/${LoginActions.LoginFailed}`,
  LoginCallback: `${prefix}/${LoginActions.LoginCallback}`,
  Register: `${prefix}/${LoginActions.Register}`,
};
