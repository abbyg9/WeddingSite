import './App.css';

function App() {
  return (
      <body onload={Font()}>
      <div className="App">
        <header id="header" className="App-header">
          <h1>The Vorobyevs</h1>
        </header>
      </div>
      </body>
  );
}

function Font(){
    document.getElementById("header").style.fontFamily="Barcelony";
}
export default App;
