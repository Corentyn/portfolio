import React, { Component } from "react";
import Layout from "../components/Layout";
import iut from "../img/iut.png";
import CompoImg from "../components/CompoImg";
import Button from "../components/Button";
import Storage from "../components/Storage";

class Presentation extends Component {
  render() {
    return (
      <>
        <Layout>
          <div className="w-full">
            <div className="felx flex-col justify-center">
              <div className="p-20">
                <CompoImg />
                <div className="flex justify-center p-10">
                <Storage/>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Presentation;
