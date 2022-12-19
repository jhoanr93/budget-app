import React from 'react'

const Filters = ({filter, setFilter}) => {
  return (
    <div className="filtros sombra contenedor">
        <form>
            <div className="campo">
                <label htmlFor="">Filter</label>
                <select id="category"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}>
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
        </form>
    </div>
  )
}

export default Filters