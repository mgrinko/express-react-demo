import React from 'react';
const API_URL = process.env.REACT_APP_API_URL;

class App extends React.Component {
  async componentDidMount() {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(data);
  }

  render() {
    return (
      <h2>Home page 3</h2>
    );
  }
}

export default App;
