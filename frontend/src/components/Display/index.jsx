import React, { useState, useEffect } from 'react'
import './styles.css';
import axios from 'axios'
import Loading from '../Loading';

const urlTodoList = 'http://localhost:3334/todos'

function Display() {
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        async function fetchdata() {
            try {
                const resp = await axios.get(urlTodoList)
                const data = resp.data

                setData(data)
                setloading(false)
            } catch (err) {
                console.error(`ERRO NA API: ${err}`)
                alert('Erro no servidor')
            }
        }
        fetchdata()
    }, [])

    const removeTodo = async (id) => {
        await axios.delete(`${urlTodoList}/${id}`)
        window.location.reload()
    }

    return (
        <div className="display-container">
            { loading ? <Loading /> : (
                <>
                    {data.map((data) => {
                        return (
                            <div key={data.id} className="todo-container">
                                <span onClick={() => removeTodo(data.id)}>X</span>
                                <h3>{data.name}</h3>
                                <p>{data.field}</p>
                            </div>
                        )
                    }
                    )

                    }
                </>
            )
            }
        </div>
    )
}

export default Display
