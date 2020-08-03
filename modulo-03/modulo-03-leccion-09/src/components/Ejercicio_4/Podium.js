import React from 'react';

class Podium extends React.Component {
  render() {
    const users = [
      { name: 'Nymphadora Tonks', time: 9 },
      { name: 'Cedric Diggory', time: 28 },
      { name: 'Cho Chang', time: 35 },
      { name: 'Luna Lovegood', time: 45 },
      { name: 'Gregory Goyle', time: 56 },
    ];
    const [first, ...rest] = users;

    return (
      <>
        <h1> Claro vencedor</h1>
        <h2>{first.name}</h2>
        <h3> El resto de escobas:</h3>
        {rest.map((e) => {
          const { name, time } = e;
          return (
            <p>
              {name} : Time {time}
            </p>
          );
        })}
      </>
    );
  }
}

export default Podium;
