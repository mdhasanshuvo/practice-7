import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Toggle from './components/Toggle'

function App() {

  // toggle funtionality
  const [isActive, setIsActive] = useState({
    cart: true,
    status: 'Available'
  })

  const handleIsActive = (status) => {
    if (status == 'Available') {
      setIsActive({
        cart: true,
        status: 'Available'
      })
    }
    else {
      setIsActive({
        cart: false,
        status: 'Selected'
      })
    }
  }

  // selected count 
  const [selectedCount, setSelectedCount] = useState(0);

  // coin count
  const [coin, setCoin] = useState(0);

  const handleCoin = () => {
    const total = coin + 2000000;
    setCoin(total);
  }

  const [addNewPlayer, setAddNewPlayer] = useState([]);

  const handleCoinDecrease = (rate, addPlayer) => {
    if (coin >= rate && selectedCount < 6) {
      console.log(selectedCount)
      const total = coin - rate;
      setCoin(total);
      setSelectedCount(selectedCount + 1);
      const newPlayer = [...addNewPlayer, addPlayer];
      setAddNewPlayer(newPlayer);
    }
    else if(selectedCount >= 6){
      alert('Already 6 added')
    }
    else {
      alert('insufficient balance')
    }

  }

  // players
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])



  return (
    <>
      {/* Header Sections */}
      <Header handleCoin={handleCoin} coin={coin}></Header>

      {/* Players Sections */}
      <Toggle
        addNewPlayer={addNewPlayer}
        players={players}
        selectedCount={selectedCount}
        handleCoinDecrease={handleCoinDecrease}
        coin={coin}
        isActive={isActive}
        handleIsActive={handleIsActive}
      ></Toggle>

      {/* Newsletter and Footer Sections */}
      <Footer></Footer>
    </>
  )
}

export default App
