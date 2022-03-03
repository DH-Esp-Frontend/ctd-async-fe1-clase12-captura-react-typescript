import React from 'react';
import './App.css';

function App() {
  let name: string = "Peter Steele"
  let birthDate: string = "1962-01-01"
  let nickName: string = "PeterTheRealGamer2008"
  let level: number = 379
  let coins: number = 12000
  let isAdmin: boolean = false
  let age;

  function getAge() {
    let currentYear: number = new Date().getFullYear()
    let currentBirthYear: string = birthDate.split('-')[0]
    age = currentYear - Number(currentBirthYear)
  }

  return (
    <div className="App">
      <p>{name}</p>
      <p>{birthDate}</p>
      <p>{nickName}</p>
      <p>{level}</p>
      <p>{coins}</p>
      <p>{isAdmin.toString()}</p>
      <p>{age}</p>
      <button type="button" onClick={() => getAge()}>Calcular idade</button>
    </div>
  );
}

export default App;
