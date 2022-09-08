import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ExpensesList from './components/ExpensesList'
import { generateId } from './helpers'
import IconNewExpense from './img/nuevo-gasto.svg'

function App() {
  
  const [expenses, setExpenses] = useState([
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  ]);
  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);  
  const [editExpense, setEditExpense] = useState({});

  useEffect(()=>{
    if(Object.keys(editExpense).length > 0){
      setModal(true)
      
    

    setTimeout(()=> {
      setAnimateModal(true)
    }, 500);
    }
  }, [ editExpense ])

  //Local storage budget
  useEffect(()=>{
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  //Local storage expenses
  useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if(budgetLS > 0){
      setIsValidBudget(true)
    }
  }, []);

  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})

    setTimeout(()=> {
      setAnimateModal(true)
    }, 500);
    
  }

  const deleteExpense = id => {
      const currentExpenses = expenses.filter(expenseIn => expenseIn.id !== id);
      setExpenses(currentExpenses);
  }

  const saveExpense = expenseIn =>{

    if(expenseIn.id){
      const currentExpenses = expenses.map( expenseState => expenseState.id ===
        expenseIn.id ? expenseIn: expenseState)
        setExpenses(currentExpenses);
        setEditExpense({})
    }else{
      expenses.id = generateId();
      expenses.date = Date.now();
      setExpenses([...expenses, expenseIn])
    }
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
            deleteExpense={deleteExpense}
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
                       editExpense = {editExpense}
                       setEditExpense={setEditExpense}/>}
      
    </div>

  );
}

export default App
