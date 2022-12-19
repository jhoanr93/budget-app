import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


const BudgetControl = ({
    expenses,
    setExpenses,
    budget,
    setBudget,
    setIsValidBudget
    }) => {

    const [percentage, setPercentage] = useState(0);
    const [available, setAvailable] = useState(budget);
    const [spent, setSpent] = useState(0);
    

    useEffect (()=>{
        const totalSpent = expenses.reduce ((total, expense) => 
        expense.amount + total,0);

        const totalAvaliable = budget - totalSpent;

        //Calculate spent percetage
        const newPercentage = (((budget - totalAvaliable) / budget)*100).toFixed(2);

        setAvailable(totalAvaliable);
        setSpent(totalSpent);
        setTimeout(()=>{
            setPercentage(newPercentage);
        }, 1500);

    }, [expenses])

    const formatAmount = (amount) =>{
        return amount.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () =>{
        const resultado = confirm('¿Do you want to restart the App?');
        if (resultado){
            setExpenses([])
            setBudget(0)
            setIsValidBudget(false)
        }
    }

  return (
    <div className="contendor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar
            styles={buildStyles({
                pathColor: percentage > 100 ? 'red' : '#3B82F6',
                trailColor: '#F5F5F5',
                textColor: percentage > 100 ? 'red' : '#3B82F6'
            })}
            value={percentage}
            text={`${percentage}% Gastado`}></CircularProgressbar>
        </div>

        <div className="contenido-presupuesto">
            <button
             className="reset-app"
             type="button"
             onClick={handleResetApp}>
                Reset App
             </button>
            <p>
                <span>Budget: </span> {formatAmount(budget)}
            </p>
            <p className={`$avaliable < 0 ? 'negativo' : ''}`}>
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