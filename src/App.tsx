import './App.css'
import { TypicalForm } from './TypicalForm'
import { FoodDeliveryForm } from './pages/FoodDelivery/FoodDeliveryForm'

function App() {

  return (
    <>
      <div className="container">
          <div className="mx-5 mb-3">
            <TypicalForm/>
          </div>
          <div className="mx-5">
            <FoodDeliveryForm/>
          </div>   
      </div>
    </>
  )
}

export default App
