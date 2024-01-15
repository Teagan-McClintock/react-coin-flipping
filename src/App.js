import './App.css';
import Coin from './Coin'

/**Renders a coin flip game
 *
 * Props: none
 *
 * State: none
 *
 * App -> Game -> Coin
 */

function App() {
  return (
    <div className="App">
      <Coin face="tails" />
    </div>
  );
}

export default App;
