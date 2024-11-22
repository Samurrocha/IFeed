"use client"
import { react, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const StatusPedido = () => {
  let [mostrar, setMostrar] = useState(true);
  let [pedidoId, setPedidoId] = useState();
  let [orders, setOrders] = useState([])


  useEffect(() => {

    async function getData() {
      const ordersList = await axios.get('http://localhost:3001/Orders')
      setOrders(ordersList.data)

    }

    getData()

  }, []
  )

  const handleChange = (event) => {
    setPedidoId(event.target.value)
  }

  let orderEspecifica = orders.find((order) => order.id == pedidoId)


  return (
    <div style={{ marginTop: '20px' }}>

      <div style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: '20px'
      }}>

        <h2>Status do Pedido</h2>

        <label>qual id do seu pedido</label >
        <input type='number' onChange={handleChange} />


        <button onClick={() => setMostrar(false)} style={buttonStyle}> Verificar status do pedido</button>
      </div>


      {!mostrar ?

        (

          orderEspecifica ? (

            <div style={{backgroundColor:''}}>

              <table style={{ margin: '20px auto', borderCollapse: 'collapse', border: '3px solid black', width: '90vw' }}>
                <thead style={{ border: '3px solid black' }}>
                  <tr style={{ border: '3px solid black' }}>
                    <th>ID</th>
                    <th>ORDER</th>
                    <th>STATUS</th>
                    <th>VALUE</th>
                    <th>CLIENTE</th>
                  </tr>
                </thead>
                <tbody style={{ border: '3px solid white' }}>
                  <tr>
                    <td>{orderEspecifica.id}</td>

                    <td>

                      {Object.entries(orderEspecifica.order).map(([key, value], index) => (


                        <div key={index}>{value.quantity}x {key}, ({value.price.toFixed(2)})</div>

                      ))}


                    </td>


                    <td>{orderEspecifica.status}</td>
                    <td>{orderEspecifica.value?.toFixed(2)}</td>
                    <td>{orderEspecifica.cliente}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) :
            (<p>O pedido com o id " {pedidoId} " nao foi encontrado</p>)

        )
        :
        (<></>)

      }


    </div >
  );

}




const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};


export default StatusPedido;