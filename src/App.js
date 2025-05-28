import Exchange from './Components/Exchange.jsx';
import Graph from './Components/Graph.jsx';
import Selector from './Components/Selector.jsx';
import './App.css';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className='title'> PRICE PARCER</div>
        <Exchange/>
      </header>
     
      <div className="App-content">
        <Graph></Graph>
        <Selector/>
      </div>      
     
      <footer className="App-footer">
      <a>FOOTER</a>
      </footer>

    </div>

  );
}

export default App;
