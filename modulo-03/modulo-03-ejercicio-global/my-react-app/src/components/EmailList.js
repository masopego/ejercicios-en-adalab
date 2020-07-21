import React from 'react';
import EmailItems from './EmailItems';

class EmailList extends React.Component {
  render() {
    return (
      <table className="table">
        <tbody>
          <EmailItems
            from="Front Fest"
            time="15:27"
            text="Entradas ya a la venta"
          />
          <EmailItems
            from="Github"
            time="13:51"
            text="Adalab/project-promo-i Local store #23"
          />
          <EmailItems from="Node Weekly" time="20:41" text="Node news" />
        </tbody>
      </table>
    );
  }
}

export default EmailList;
