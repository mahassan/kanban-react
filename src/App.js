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
        <Board title="In Progress" />
        <Board title="In Testing" />
        <Board title="Deployed" />
        </div>
     </section>
    </div>
  );
}

export default App;
