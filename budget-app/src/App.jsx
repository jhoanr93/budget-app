import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ExpensesList from './components/ExpensesList'
import { generateId } from './helpers'
import IconNewExpense from './img/nuevo-gasto.svg'

function App() {
  
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(()=> {
      setAnimateModal(true)
    }, 500);
  }

  const saveExpense = expenseIn =>{
    expenses.id = generateId();
    expenses.date = Date.now();
    setExpenses([...expenses, expenseIn])

    setModal(false)

    setTimeout(()=> {
      setAnimateModal(false)
    }, 500);
  }


  return (
    <div className={modal ? 'fijar': ''}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
          <>
          <main>
            <ExpensesList expenses={expenses}></ExpensesList>
          </main>
          <div className='nuevo-gasto'>
          <img src={IconNewExpense}
            alt="icon new expense"
            onClick={handleNewExpense} />
          </div>
          </>
      )}

      {modal && <Modal setModal={setModal}
                       animateModal={animateModal}
                       setAnimateModal={setAnimateModal}
                       saveExpense = {saveExpense}/>}
      
    </div>

  );
}

export default App
