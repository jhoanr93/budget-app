import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import { generateId } from './helpers'
import IconNewExpense from './img/nuevo-gasto.svg'

function App() {
  
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expense, setExpense] = useState([])

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(()=> {
      setAnimateModal(true)
    }, 500);
  }

  const saveExpense = expense =>{
    expense.id = generateId();
    setExpense([...expense, expense])

    setModal(false)

    setTimeout(()=> {
      setAnimateModal(false)
    }, 500);
  }


  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
          <div className='nuevo-gasto'>
          <img src={IconNewExpense} alt="icon new expense" onClick={handleNewExpense} />
      </div>
      )}

      {modal && <Modal setModal={setModal}
                       animateModal={animateModal}
                       setAnimateModal={setAnimateModal}
                       saveExpense = {saveExpense}/>}
      
    </div>

  );
}

export default App
