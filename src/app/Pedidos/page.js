"use client";
import { useState, useEffect } from 'react'
import { IfeedStyle } from './page.js'
import axios from 'axios';
import "../componentsCss/IfeedStyle.css" 

export default function Ifeed() {

    let [estado, setEstado] = useState(false)
    let [orders, setOrders] = useState([])

    useEffect(() => {

        async function getData() {
            const ordersList = await axios.get('http://localhost:3001/Orders')
            setOrders(ordersList.data)


        }

        getData()

    }, []
    )




    return (
        <>
            {estado ? (

                <div>
                    <table>
                        <thead>

                            <tr>
                                <th>ID</th>
                                <th>ORDER</th>
                                <th>STATUS</th>
                                <th>VALUE</th>
                                <th>CLIENTE</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map((element, index) => (
                                <tr key={index}>
                                    <td>{element.id}</td>


                                    <td>
                                        {Object.entries(element.order).map(([key, value], index) => (


                                            <div key={index}>{value.quantity}x {key}, ({value.price.toFixed(2)})</div>

                                        ))}
                                    </td>


                                    <td>{element.status}</td>
                                    <td>{element.value.toFixed(2)}</td>
                                    <td>{element.cliente}</td>
                                </tr>
                            ))}


                        </tbody>
                    </table>

                </div>)

                : (<h4>sdsd</h4>)

            }


            <button onClick={() => setEstado(true)}>teste</button>
            <button onClick={() => console.log(orders)}>ocnsole</button>

        </>
    )
}