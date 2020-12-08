import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <form>

        <label>
          User Name :
          <input type="text" name="name" />
        </label>
         <input type="submit" value="Envoyer" />
      </form>
      </header>
    </div>
  );
}

export default App;
