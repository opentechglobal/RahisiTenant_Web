import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import ThemeProvider from "../containers/ThemeProvider";
import initStore from "../redux/store";
import "antd/dist/antd.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import "../style/global.css";

/* Landing Props */
import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "common/assets/css/icon-example-page.css";
// swiper bundle styles
// import 'swiper/css/bundle';
import "common/assets/css/react-slick.css";
import "common/assets/css/rc-collapse.css";
import "rc-collapse/assets/index.css";

class CustomApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider>
          <Modal>
            <Component {...pageProps} />
          </Modal>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(initStore)(CustomApp);
