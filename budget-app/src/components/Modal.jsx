import CerrarBtn from '../img/cerrar.svg'




const modal = ({setModal, animateModal, setAnimateModal}) => {

  const hideModal = () => {
      
      setAnimateModal(false);

      setTimeout(()=>{
        setModal(false);
      }, 500)
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

        <form className={`formulario ${animateModal ? "animar" : 'cerrar'}`}>
          <legend>New Expense</legend>
        </form>


    </div>
  )
}

export default modal