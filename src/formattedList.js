import React, { Component } from "react";
import { injectIntl, FormattedMessage, intlShape } from "react-intl";
import PropTypes from "prop-types";

class FormattedList extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    values: PropTypes.arrayOf(PropTypes.string)
  };
  render() {
    const { values, intl } = this.props;
    const formattedMessages = values.map(m => intl.formatMessage({ id: m }));
    const formatter = new Intl.ListFormat(intl.locale, {
      style: "long",
      type: "conjunction"
    });
    const formattedList = formatter.format(formattedMessages);
    return (
      <FormattedMessage
        id={"prefix"}
        defaultMessage={formattedList}
        values={{
          forbidden: formattedList
        }}
      />
    );
  }
}

export default injectIntl(FormattedList);
