import logo from './logo.png';
import './App.css';
import { getUser } from './API.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      github_users: null,
    }
  }

  async loadUser() {
    try {
      const USERFromAPI = await getUser();
      this.setState({ github_users: USERFromAPI })
    } catch (error) {
      console.error(error);
    }
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          <div className="App">
            <header className="App-header">
            <p>{github_users.login}</p>
          </header>
          </div>
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
}




export default App;