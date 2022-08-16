import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Input from "../../../components/uielements/input";
import Checkbox from "../../../components/uielements/checkbox";
import Button from "../../../components/uielements/button";
import IntlMessages from "../../../components/utility/intlMessages";
import jwtConfig from "../../../common/config/jwt.config";
import FirebaseLogin from "../../../containers/FirebaseForm/FirebaseForm";
import Auth0 from "../../../authentication/Auth0";
import authActions from "../../../authentication/actions";
import SignInStyleWrapper from "../styled/SignIn.styles";
import Head from "next/head";

const { login } = authActions;

function SignInPage(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(true));
  };

  const handleJWTLogin = () => {
    const { jwtLogin, history } = props;
    const userInfo = {
      username:
        (process.browser && document.getElementById("inputUserName").value) ||
        "",
      password:
        (process.browser && document.getElementById("inpuPassword").value) ||
        "",
    };
    // jwtLogin(history, userInfo);
  };

  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link href="/">
              <a>
                <IntlMessages id="page.signInTitle" />
              </a>
            </Link>
          </div>

          <div className="isoSignInForm">
            <div className="isoInputWrapper">
              <Input
                id="inputUserName"
                size="large"
                placeholder="Username"
                defaultValue="demo@gmail.com"
              />
            </div>

            <div className="isoInputWrapper">
              <Input
                id="inpuPassword"
                size="large"
                type="password"
                placeholder="Password"
                defaultValue="demodemo"
              />
            </div>

            <div className="isoInputWrapper isoLeftRightComponent">
              <Checkbox>
                <IntlMessages id="page.signInRememberMe" />
              </Checkbox>
              <Button
                type="primary"
                onClick={jwtConfig.enabled ? handleJWTLogin : handleLogin}
              >
                <IntlMessages id="page.signInButton" />
              </Button>
            </div>

            {/* <p className="isoHelperText">
              <IntlMessages id="page.signInPreview" />
            </p> */}

            <div className="isoCenterComponent isoHelperWrapper isoBorderTop">
              <Link href="/app/forgotpassword">
                <div className="isoForgotPass">
                  <IntlMessages id="page.signInForgotPass" />
                </div>
              </Link>
              <Link href="/app/signup">
                <a>
                  <IntlMessages id="page.signInCreateAccount" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}

export default () => (
  <>
    <Head>
      <title>RahisiTenant - Sign In</title>
    </Head>
    <SignInPage />
  </>
);
