const BudgetControl = ({budget}) => {

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
                <span>Available: </span> {formatAmount(0)}
            </p>
            <p>
                <span>Spent: </span> {formatAmount(0)}
            </p>
        </div>
    </div>
  )
}

export default BudgetControl