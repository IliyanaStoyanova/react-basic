import './App.css'
import DestinationCard from './components/DestinationCard'
import { DESTINATIONS } from './data'

function App() {
  return (
    <>
      {DESTINATIONS.map((item) => <DestinationCard {...item} />)}
    </>
  )
}

export default App
