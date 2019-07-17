import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import FormattedList from "./formattedList";

import "./styles.css";

const messages = {
  color1: "red",
  color2: "blue",
  color3: "black",
  pre_message: "I love {list}"
};
function App() {
  const messagesId = ["color1", "color2", "color3"];
  return (
    <IntlProvider locale={"en"} messages={messages}>
      <FormattedList values={messagesId} messageId={"pre_message"} />
    </IntlProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
