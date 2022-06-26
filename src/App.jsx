import { useState, useEffect } from 'react'
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

  const [editExpense, setEditExpense] = useState({});

  useEffect(()=>{
    if(Object.keys(editExpense).length > 0){
      setModal(true)
      
    

    setTimeout(()=> {
      setAnimateModal(true)
    }, 500);
    }
  }, [ editExpense ])

  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})

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
        expenses = {expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
          <>
          <main>
            <ExpensesList
             expenses={expenses}
             setEditExpense={setEditExpense}
            
            ></ExpensesList>
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
                       saveExpense = {saveExpense}
                       editExpense = {editExpense}/>}
      
    </div>

  );
}

export default App
