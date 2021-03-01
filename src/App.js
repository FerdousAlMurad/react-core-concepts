import logo from './logo.svg';
import './App.css';

function App() {
  // var person = {
  //   name: "Dr. Mahfuz",
  //   job: "Singer"
  // }

  // var person2 = {
  //   name: "Eva Rahman",
  //   job: "Kokil Konthi"
  // }

  // var style = {
  //   colo: 'red',
  //   backgroundColor: 'yellow'
  // }
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Adobe', price: '$60.99'},
    {name: 'Pdf Reader', price: '$6.99'}
  
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person </p>
        <Product name={products[0].name} price={products[0].price}> </Product>
        <Product name={products[1].name} price={products[1].price}> </Product>
        <Person name="Rubel" naika="Moushumi"> </Person>
        <Person name="Jasim" naika="Sabana"> </Person>
        <Person name= "Elias" naika="Bobita"> </Person>
        
        
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="" style={style}>My heading : {person.name+ " " + person.job} </h1>
        <h3 style={{backgroundColor:'cyan', color:'yellow'}}>Singer: {person2.name+ " "+ person2.job} </h3>
        <p> my first Paragraph </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}
function Product(props){
  const productStyle ={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    hight: '200px',
    width: '200px',
    float: 'left'
  }

  return (
    <div style={productStyle}>

      <h3> {props.name} </h3>
      <h5> {props.price} </h5>
      <button> Buy Now </button>

    </div>
  )
}

function Person(props){
  const personStyle={
    border: '2px solid red', 
    margin: '10px'

  }
  console.log(props)
  return ( 
    <div style={personStyle}>
  {/* <div style= {{border: '2px solid red', margin: '10px'}}> */}
  <h1> Nayok: {props.name} </h1>
  <h3> Naika: {props.naika} </h3> 
  </div>
  )
}

export default App;
