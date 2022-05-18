import React from 'react'
import Expense from './Expense'

export const ExpensesList = ({expenses}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>
            {expenses.length ? 'Expenses' : 'No expenses yet'} 
        </h2>
        {expenses.map(expenseIn =>{
            <Expense key={expenses.id} expense={expenseIn} ></Expense>

        })}
        </div>
  )
}

export default ExpensesList
