import React from 'react'
import { formatDate } from '../helpers';

import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_ahorro.svg';
import IconoSuscripciones from '../img/icono_salud.svg';

const diccionarioIconos = {
            saveMoney: IconoAhorro,
            food: IconoComida,
            home:IconoCasa,
            expenses: IconoGastos,
            hobbies: IconoOcio,
            health: IconoSalud,
            suscriptions: IconoSuscripciones
}

const Expense = () => {
    const {category, name, amount, id, date } = expense;
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <img src={diccionarioIconos[category]}>
            
            </img>
            <div className='descripcion-gasto'>
                <p className='categoria'>
                    {category}
                </p>
                <p className='nombre-gasto'>{name}</p>
                <p className='fecha-gasto'>
                    Added on:{''} <span>{formatDate(date)}</span>
                </p>
            </div>
            
        </div>
        <p className='cantidad-gasto'>{amount}</p>
    </div>
  )
}

export default Expense