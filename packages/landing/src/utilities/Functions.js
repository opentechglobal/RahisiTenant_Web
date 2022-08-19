/* eslint-disable class-methods-use-this */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable no-lonely-if */
/* eslint-disable no-return-assign */
/* eslint-disable no-case-declarations */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import moment from "moment";
import readXlsxFile from "read-excel-file";
import cloudinary from "cloudinary/lib/cloudinary";
import { defineds } from "../helpers/DateRanges";

const defErrorMessage = "An error occured processing your current request!";
class Functions {
  constructor(that) {
    this.that = that;
    this.initialState = JSON.stringify(that.state);
  }

  checkEmpty = (requiredFields) => {
    const empty = [];
    requiredFields.forEach((field) =>
      this.that.state[`${field}`] === "" ? empty.push(field) : false
    );

    if (empty.length === 0) {
      return false;
    }
    this.setMessage(
      "error",
      "It appears there are required fields you haven't filled!"
    );

    document.getElementById(`${emptyField}`).classList.add("required");
    setTimeout(() => {
      this.that.setState({ error: false, errorMessage: "" });
      empty.forEach((emptyField) =>
        emptyField === "phoneNumber" || emptyField === "mobileNumber"
          ? document
              .getElementsByClassName("react-tel-input")[0]
              .classList.remove("mobile-required")
          : document
              .getElementById(`${emptyField}`)
              .classList.remove("required")
      );
    }, 8000);
    return true;
  };
}

export default Functions;
