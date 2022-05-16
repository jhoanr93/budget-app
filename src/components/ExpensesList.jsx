import React from 'react'
import Expense from './Expense'

export const ExpensesList = ({expense}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>
            {expense.length ? 'Expenses' : 'No expenses yet'} 
        </h2>
        {expense.map(expense =>{
            <Expense key={expense.id} expense={expense} ></Expense>

        })}
        </div>
  )
}

export default ExpensesList
