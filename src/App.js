import './App.css';
import React from 'react';
import CompoasantClass from './Components/ComposantClass';
import CompoasantFunc from './Components/ComposantFunc';
import Product from './Components/Product';

// const option = (
//   <ol>
//     <li>TWIN</li>
//     <li>BI</li>
//     <li>SAE</li>
//   </ol>
// )
// let x = "Hello"
// var y = " world "
// const z = "!"
// const expression = <p> 1 + 1 = {1 + 1} </p>
// var nom = <h2> Rayen </h2>
// var prenom = <h2> Bourguiba </h2>
// const photo = <img src="logo512.png" alt="My Image" width="100px" height="100px" />
// const user = {
//   prenom: 'Rayen',
//   nom: 'Bourguiba'
// }
// function formatName(u) {
//   return u.prenom + '--' + u.nom
// }
// var myStyle = {
//   fontSize: 100,
//   color: '#FFC222'
// }
// function disBonjour(user){
//   if (user.prenom == 'Rayen') {
//     return <h1>Hello {formatName(user)} !</h1>
//   }
//   return <h1>Hello Unknown.</h1>
// }

// function disBonjour2(user) {
//   return (user.prenom=='Rayen') ? (<h1>Hello {formatName(user)} !</h1>) : (<h1>Hello Unknown.</h1>)  
// }

// const numbers =[7, 12, 25, 4, 5]
// const listItems=numbers.map((number,index)=><li key={index}>{number}</li>)
// const max=numbers.reduce((a,b)=> b>a?b:a)
// //const max=numbers.reduce((a,b)=>Math.max(a,b))
// const tab=numbers.filter(v=>v%2==0).map((v,ind)=><li key={ind}>{v*v}</li>)

function App() {

  return (
    <div className="App">
      <CompoasantClass></CompoasantClass>
      <br></br>
      <CompoasantFunc></CompoasantFunc>
      <Product></Product>
      {/* <h3>Workshop1: Initiation à JSX</h3>
      {option}
      <div>{x}{y}{z}</div>
      <div>{expression}</div>
      {nom}
      {prenom}
      {photo}
      <br></br>
      bonjour : {user.prenom}--{user.nom}
      <br></br>
      bonjour : {formatName(user)}
      <br></br>
      <h1 style={myStyle}>Hello !</h1>
      {disBonjour(user)}
      {disBonjour2(user)}
      <br></br>
      {listItems}
      <br></br>
      Max: {max}
      <br></br>
      {tab} */}
    </div>


    
  );
}

export default App;
