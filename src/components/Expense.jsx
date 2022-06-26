import React from 'react';

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'

import "react-swipeable-list/dist/styles.css"
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

const Expense = ({expenseIn, setEditExpense}) => {
    const {typeExpense, name, amount, id, date } = expenseIn;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setEditExpense(expenseIn)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => console.log('delete...')}>
                Delete
            </SwipeAction>
        </TrailingActions>
    )
  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
            <div className='gasto sombra'>
                <div className='contenido-gasto'>
                    <img src={diccionarioIconos[typeExpense]}>
                    
                    </img>
                    <div className='descripcion-gasto'>
                        <p className='categoria'>
                            {typeExpense}
                        </p>
                        <p className='nombre-gasto'>{name}</p>
                        <p className='fecha-gasto'>
                            Added on:{''} <span>{formatDate(date)}</span>
                        </p>
                    </div>
                    
                </div>
                <p className='cantidad-gasto'>{amount}</p>
            </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense;
