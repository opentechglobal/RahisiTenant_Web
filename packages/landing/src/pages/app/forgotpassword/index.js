import Head from 'next/head';

import React from 'react';
import Link from 'next/link';
import Input from '../../../components/uielements/input';
import Button from '../../../components/uielements/button';
import IntlMessages from '../../../components/utility/intlMessages';
import ForgotPasswordStyleWrapper from '../styled/ForgotPassword.styles';

function ForgotPassword() {
  return (
    <ForgotPasswordStyleWrapper className="isoForgotPassPage">
      <div className="isoFormContentWrapper">
        <div className="isoFormContent">
          <div className="isoLogoWrapper">
            <Link href="/">
              <a className="isoMenuHolder">
                <span className="nav-text">
                  <IntlMessages id="page.forgetPassTitle" />
                </span>
              </a>
            </Link>
          </div>

          <div className="isoFormHeadText">
            <h3>
              <IntlMessages id="page.forgetPassSubTitle" />
            </h3>
            <p>
              <IntlMessages id="page.forgetPassDescription" />
            </p>
          </div>

          <div className="isoForgotPassForm">
            <div className="isoInputWrapper">
              <Input size="large" placeholder="Email" />
            </div>

            <div className="isoInputWrapper">
              <Button type="primary">
                <IntlMessages id="page.sendRequest" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ForgotPasswordStyleWrapper>
  );
}

export default () => (
  <>
    <Head>
      <title>Rahisi Tenant - Forgot Password</title>
    </Head>
    <ForgotPassword />
  </>
);
