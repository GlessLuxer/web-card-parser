//import logo from './logo.svg';
import Exchange from './Exchange.js';
import Graph from './Graph.js';
import Selector from './Selector.jsx';
import './App.css';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className='title'></div>
        <Exchange></Exchange>
      </header>
     
      <div className="App-content">
        <Graph></Graph>
        <Selector></Selector>
      </div>      
     
      <footer className="App-footer">
      <a>FOOTER</a>
      </footer>

    </div>

  );
}

export default App;
