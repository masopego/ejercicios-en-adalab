import React from 'react';

class EmailItems extends React.Component {
  render() {
    return (
      <tr className="cursor-pointer">
        <td>
          <a href="#" className="text--decoration--none">
            {this.props.from}
          </a>
        </td>
        <td>
          <a href="#" className="text--decoration--none">
            {this.props.text}
          </a>
        </td>
        <td>
          <a href="#" className="text--decoration--none">
            {this.props.time}
          </a>
        </td>
        <td className="text-align-right">
          <button className="form__btn fas fa-trash"></button>
        </td>
      </tr>
    );
  }
}

export default EmailItems;
