import { useState, useEffect } from 'react';
import CerrarBtn from '../img/cerrar.svg'
import Message from './Message';

const modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense, 
  setEditExpense}) => {

  const [message, setMessage] = ('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [typeExpense, setTypeExpense] = useState('');
  const [id, setId] = useState('');
  const [date, setDate] = useState('');
  
  

  useEffect(()=>{
      if( Object.keys(editExpense).length > 0){
        setName(editExpense.name)
        setAmount(editExpense.amount)
        setTypeExpense(editExpense.typeExpense)
        setId(editExpense.id)
        setDate(editExpense.date)
      }
  },[])

  const hideModal = () => {
      
      setAnimateModal(false);
      setEditExpense({});

      setTimeout(()=>{
        setModal(false);
      }, 500)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if([name, amount, typeExpense].includes('')){
      setMessage('All fields are mandatory');

      setTimeout(() => {
        setMessage('')
      }, 1000);

      return;
    }

    saveExpense({name, amount, typeExpense, id, date})
  } 

  return (
    <div className="modal">
        <div className='cerrar-modal'>
            <img 
                src={CerrarBtn}
                alt="Cerrar modal"
                onClick={hideModal}
            />
        </div>

        <form onSubmit={handleSubmit} className={`formulario ${animateModal ? "animar" : 'cerrar'}`}>
          <legend>{editExpense.name ? 'Edit expense' : 'New Expense'}</legend>
          {message && <Message tipo={error}>{message}</Message>}

          <div className='campo'>
            <label htmlFor="name">Expense name</label>
            <input id="name" 
              type="text" 
              placeholder="Add the expense name" 
              value={name}
              onChange={ e => setName(e.target.value)}>
                
            </input>
          </div>

          <div className='campo'>
            <label htmlFor="amount">Amount</label>
            <input id="amount" 
            type="number"
            placeholder="Add the amount"
            value={amount}
            onChange={ e => setAmount(Number(e.target.value))}>
                
            </input>
          </div>

          <div className='campo'>
            <label htmlFor="category">Category</label>
            <select id="category" value={typeExpense} onChange={e => setTypeExpense(e.target.value)}>
              <option value="">Select</option>
              <option value="saveMoney">Save money</option>
              <option value="food">Food</option>
              <option value="home">Home</option>
              <option value="expenses">Diferent expense</option>
              <option value="hobbies">Hobbies</option>
              <option value="health">Health</option>
              <option value="suscriptions">Suscriptions</option>
            </select>
          </div>

          <input
           type="submit"
           value={editExpense.name ? 'Save changes' : 'Add Expense'}
           />


        </form>


    </div>
  )
}

export default modal