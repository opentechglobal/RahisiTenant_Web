import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Input from "../../../components/uielements/input";
import Checkbox from "../../../components/uielements/checkbox";
import Button from "../../../components/uielements/button";
import FirebaseSignUpForm from "../../../containers/FirebaseForm/FirebaseForm";
import authAction from "../../../redux/auth/actions";
import appActions from "../../../redux/app/actions";
import Auth0 from "../../../authentication/Auth0";
import IntlMessages from "../../../components/utility/intlMessages";
import SignUpStyleWrapper from "../styled/SignUp.styles";
import Head from "next/head";
import Select, { SelectOption } from "../../../components/uielements/select";

const { login } = authAction;
const { clearMenu } = appActions;

function SignUp() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleSignUp = () => {

    let fields = ['firstName', 'lastName', 'emailAddress', 'phoneNumber']
    if (firstName === "") {
      document.getElementById("firstName").classList.add("required");
    }
    // console.log(token, "handlelogin");
    // if (token) {
    //   dispatch(login(token));
    // } else {
    //   dispatch(login());
    // }
    // dispatch(clearMenu());
    // history.push("/dashboard");
  };

  return (
    <SignUpStyleWrapper className="isoSignUpPage">
      <div className="isoSignUpContentWrapper">
        <div className="isoSignUpContent">
          <div className="isoLogoWrapper">
            <Link href="/">
              <a className="isoMenuHolder">
                <span className="nav-text">
                  <IntlMessages id="page.signUpTitle" />
                </span>
              </a>
            </Link>
          </div>

          <div className="isoSignUpForm">
            <div className="isoInputWrapper">
              <Input
                size="large"
                placeholder="First name"
                id="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>

            <div className="isoInputWrapper">
              <Input
                size="large"
                placeholder="Last Name"
                id="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>

            <div className="isoInputWrapper">
              <Input
                size="large"
                placeholder="Email"
                type="email"
                id="emailAddress"
                value={emailAddress}
                onChange={(event) => setEmailAddress(event.target.value)}
              />
            </div>

            <div
              className="isoInputWrapper"
              style={{ marginBottom: "25px", marginTop: "25px" }}
            >
              <Checkbox>
                <IntlMessages id="page.signUpTermsConditions" />
              </Checkbox>
            </div>

            <div className="isoInputWrapper">
              <Button type="primary" onClick={() => handleSignUp()}>
                <IntlMessages id="page.signUpButton" />
              </Button>
            </div>
            {/* <div className="isoInputWrapper isoOtherLogin">
              {/* <Button
                onClick={() => {
                  Auth0.login();
                }}
                type="primary"
                className="btnAuthZero"
              >
                <IntlMessages id="page.signUpAuth0" />
              </Button> */}
            {/* </div> */}
            <div className="isoInputWrapper isoCenterComponent isoHelperWrapper">
              <IntlMessages id="page.signUpAlreadyAccount" />
              <span>
                <a href="/app/login">
                  <IntlMessages id="page.signInAlreadyHasAccount" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </SignUpStyleWrapper>
  );
}

export default () => (
  <>
    <Head>
      <title>RahisiTenant - Create Account</title>
    </Head>
    <SignUp />
  </>
);
