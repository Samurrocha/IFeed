import React, { useState } from 'react';

const StatusPedido = () => {
  const [status, setStatus] = useState('pedido sendo feito'); 

  

  const alterarStatus = (novoStatus) => {
    setStatus(novoStatus);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Status do Pedido</h2>
      <p>O status atual é: <strong>{status}</strong></p>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => alterarStatus('pedido sendo feito')} 
          style={buttonStyle}
        >
          Pedido Sendo Feito
        </button>
        <button 
          onClick={() => alterarStatus('pedido preparado')} 
          style={buttonStyle}s
        >
          Pedido Preparado
        </button>
        <button 
          onClick={() => alterarStatus('pedido saiu para entrega')} 
          style={buttonStyle}
        >
          Pedido Saiu Para Entrega
        </button>
      </div>
    </div>
  );
};

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