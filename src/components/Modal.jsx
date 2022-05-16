import { useState } from 'react';
import CerrarBtn from '../img/cerrar.svg'
import Message from './Message';

const modal = ({setModal, animateModal, setAnimateModal, saveExpense}) => {

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [typeExpense, setTypeExpense] = useState('');
  const [message, setMessage] = ('');

  const hideModal = () => {
      
      setAnimateModal(false);

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

    saveExpense({name, amount, typeExpense})
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
          <legend>New Expense</legend>
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
              <option>Select</option>
              <option>Save money</option>
              <option>Food</option>
              <option>Home</option>
              <option>Diferent expense</option>
              <option>Hobbies</option>
              <option>Health</option>
              <option>Suscriptions</option>
            </select>
          </div>

          <input type="submit" value="Add expense" />


        </form>


    </div>
  )
}

export default modal