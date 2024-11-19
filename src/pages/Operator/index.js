import React from "react";
import './style.css';
import { useState, useEffect } from "react";





function Operator() {
  const [lançar, setLançar] = useState('');
  const [nomelist, setNomelist] = useState ([
    
  ]);

  function handleLancar(e){
    e.preventDefault();
    alert('TESTE');
  }
  
  function handleRegister(e){
   e.preventDefault();
    setLançar('')
    setNomelist([...nomelist, lançar])
    

  }  



  return (
    <div className="containerfundo">
      <div className="painelcontainer">
        <div className="divpainel">
        <section className="lançador">
          
          <h1>PAINEL DE CONTROLE</h1>
       
            <label>Preparando Pedido</label>
          
            <input 
            placeholder="digite o nome do pedido"
            value={lançar}
            onChange={ (e) => setLançar(e.target.value)}/>
            
            <button onClick={handleRegister}>Lançar</button>
          
          </section>
        
        </div>
        <div>
        <section className="lisoperator">
            <h1>PREPARANDO PEDIDO</h1>
            <ul className="prepalist">
                { nomelist.map( nome  => (
                    <li key={nome}>{nome}
                    <button onClick={handleLancar}>OK!</button></li>
                ))}
            </ul>
          </section>
        </div>
      </div>
    </div>


        );
    
}

export default Operator;
