import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Row = ({ rowID, selectedID, setSelectedID }) => {

  console.log(rowID)

  const onClick = () => setSelectedID(rowID)

  return (
    <tr
      style={{backgroundColor: rowID === selectedID ? 'red' : 'white'}}
      onClick={onClick}
    >
      <td>
        <input />
      </td>
    </tr>
  )
}

const Table = ({ selectedID, setSelectedID }) => {
  return (
    <table>
      <tbody>
        <Row rowID='1' selectedID={selectedID} setSelectedID={setSelectedID} />
        <Row rowID='2' selectedID={selectedID} setSelectedID={setSelectedID} />
        <Row rowID='3' selectedID={selectedID} setSelectedID={setSelectedID} />
      </tbody>
  </table>
  )
}

function App() {
  const [selectedID, setSelectedID] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <Table selectedID={selectedID} setSelectedID={setSelectedID} />
      </header>
    </div>
  );
}

export default App;
