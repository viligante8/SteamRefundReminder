import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SteamService from './lib/steam_service';
import { Game } from './types';

function App() {
  const [ownedGames, setOwnedGames] = useState<Game[]>();
  const [ownedGameCount, setOwnedGameCount] = useState(0);
  useEffect(() => {
    (async () => {
      const og = await SteamService.getOwnedGames();
      setOwnedGames(og.games);
      setOwnedGameCount(og.game_count);
    })();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        count is {ownedGameCount}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
