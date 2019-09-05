import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { render } from "react-dom";
import Tabs from "./components/Tabs";
import glamorous from "glamorous";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const TabComponent = () => (
  <div style={styles}>
    <Tabs
      activeTab={{
        id: "tab1"
      }}
    >
      <Tabs.Tab id="tab1" title="Tab 1">
        <glamorous.Div padding={20}>This is tab 1</glamorous.Div>
      </Tabs.Tab>
      <Tabs.Tab id="tab2" title="Tab 2">
        <glamorous.Div padding={20}>This is tab 2</glamorous.Div>
      </Tabs.Tab>
    </Tabs>
  </div>
);


ReactDOM.render(<App/>, document.getElementById('root'));