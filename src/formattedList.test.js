import React from "react";
import { mount } from "enzyme";
import { IntlProvider, FormattedMessage } from "react-intl";

import FormattedList from "./formattedList";

function mountWithIntl(element) {
  const messages = {
    m1: "foo1",
    m2: "foo2",
    m3: "foo3",
    prefix: "You should not use {forbidden}"
  };
  return mount(
    <IntlProvider locale={"en"} messages={messages}>
      {element}
    </IntlProvider>
  );
}
describe("FormattedList", () => {
  test("foo", () => {
    const messages = ["m1", "m2", "m3"];
    const element = mountWithIntl(
      <FormattedList values={messages} prefix={"pre"} />
    ).find(FormattedMessage);
    expect(element.html()).toEqual(
      "<span>You should not use foo1, foo2, and foo3</span>"
    );
  });
});
