import Header from "./components/Header";
import Main from "./components/Main";
import styled from "./App.module.css";

function App() {
  return (
    <div className={styled.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
