//import logo from './logo.svg';
import './App.css';
import './index.css'

function App() {
  const url = 'http://192.168.1.30/optim';

  const onClick = () => {
    (async () => {
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"food_energy_goal": 2000})
      });
      const content = await rawResponse.json();
    
      console.log(content);
    })();
    }

  return (
    <div className="App">
      <img 
        onClick={() => onClick()}
        className="action" 
        src={"assets/plus.svg"} 
        alt="logo"
        style={{ width: '40px', height: '40px' }} />
    </div>
    
  );
}


export default App;
