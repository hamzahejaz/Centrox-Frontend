import React from "react";
import { Layout } from "antd";
import Page from "../Props/Pops";

const { Header } = Layout;

const Demo = (props) => {
  return (
    <Layout>
      {!props.Header ? (
        ""
      ) : (
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            color: "white",
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          {props.Header.props.children}
        </Header>
      )}
      <br />
      {!props.Headers ? (
        ""
      ) : (
        <Header
          theme="light"
          className="site-layout-background"
          style={{
            padding: 0,
            color: "white",
            textAlign: "center",
            fontSize: "25px",
          }}
        >
          <Page print={props.Headers} />
        </Header>
      )}

     
    </Layout>
  );
};

export default Demo;
