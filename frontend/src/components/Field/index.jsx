import Axios from 'axios'
import React, { useState } from 'react'
import './styles.css'

export default function Field() {
    const [name, setName] = useState([])
    const [field, setField] = useState([])

    const handleChangeName = (event) => setName(event.target.value)
    const handleChangeField = (event) => setField(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        async function saveTodo() {
            try {
                await Axios.post('http://localhost:3334/todos', {
                    name,
                    field
                })
            } catch (err) {
                console.log(err);
            }
        }
        saveTodo()
        window.location.reload()
    }
    

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="name-field">
                <input
                    type="text"
                    name="name"
                    placeholder="Dia da semana ou Data"
                    onChange={(event) => handleChangeName(event)}
                    required
                />
                <textarea
                    placeholder="Descrição"
                    onChange={(event) => handleChangeField(event)}
                    required
                />
            </label>
            <button type="submit">Salvar</button>
        </form>
    )
}
