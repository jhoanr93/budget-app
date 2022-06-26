import React from 'react'
import Expense from './Expense'

export const ExpensesList = ({expenses, setEditExpense}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>
            {expenses.length ? 'Expenses' : 'No expenses yet'} 
        </h2>
        {expenses.map(expenseIn => (
          <Expense
            key = {expenseIn.id}
            expenseIn = {expenseIn}
            setEditExpense = {setEditExpense}
          ></Expense>
          ))}
        </div>
  )
}

export default ExpensesList
