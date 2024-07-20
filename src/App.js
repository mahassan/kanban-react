import Board from './Board.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
     <section>
        <h1>Kanban</h1>
        <div class="main__container">
        <Board title="In Progress" details="To add a CTA to the kanban button" />
        <Board title="In Testing" details="Nothing in testing" />
        <Board title="Deployed" details="Deployed" />
        </div>
     </section>
    </div>
  );
}

export default App;
