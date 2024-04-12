import Board from "./containers/Board";
import stylesss from "./styles/index.module.css";
function App() {
  return (
    <div className={stylesss.container}>
      <h1> Tic tac toe</h1>
      <Board />
    </div>
  );
}

export default App;
