import { useState, useEffect } from "react"


const BudgetControl = ({expenses, budget}) => {

    const [available, setAvailable] = useState(budget);
    const [spent, setSpent] = useState(0);

    useEffect (()=>{
        const totalSpent = expenses.reduce ((total, expense) => 
        expense.amount + total,0);

        const totalAvaliable = budget - totalSpent;

        setAvailable(totalAvaliable)
        setSpent(totalSpent);
    }, [expenses])

    const formatAmount = (amount) =>{
        return amount.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className="contendor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Grafica aqui</p>
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Budget: </span> {formatAmount(budget)}
            </p>
            <p>
                <span>Available: </span> {formatAmount(available)}
            </p>
            <p>
                <span>Spent: </span> {formatAmount(spent)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControl