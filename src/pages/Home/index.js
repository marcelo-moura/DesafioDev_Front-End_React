import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower } from 'react-icons/fi';

import api from "../../services/api";
import './styles.css';
import padlock from '../../assets/padlock.png';

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    const nomeUsuario = localStorage.getItem('nomeUsuario');
    const navigate = useNavigate();

    useEffect(() => {
        api.get('api/v1/Produto/1/20/1/asc').then(response => {
            setProdutos(response.data.data.listObject);
        })
    }, []);

    async function detalheProduto(id) {
        console.log(id);
    }

    return (
        <div className="home-container">
            <header>
                <span>Bem-vindo, <strong>{nomeUsuario.toLowerCase()}</strong>!</span>               
            </header>
            <h1></h1>

            <div className="home-container-listContainer">
                {produtos.map(produto => (
                    <a key={produto.id} className="home-container-itemLink" onClick={() => detalheProduto(produto.id)}>
                        <div className="home-container-item">
                            <img className="home-container-thumbnail" src={padlock}></img>
                                <div className="home-container-titlePane">
                                    {produto.nome}
                                </div>   
                                <div className="home-container-pricePane">
                                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(produto.preco)}
                                </div>                                                         
                        </div>
                    </a>
                ))}
            </div>

            {/* <ul>
                {produtos.map(produto => (
                     <li key={produto.id}>
                        <strong>Nome:</strong>
                        <p>{produto.nome}</p>
                        
                        <strong>Descrição:</strong>
                        <p>{produto.descricao}</p>
                        
                        <strong>Preço:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(produto.preco)}</p>
                        
                        <strong>Quantidade:</strong>
                        <p>{produto.quantidade}</p>

                        <Link type="button" className="button" onClick={() => detalheProduto(produto.id)}>
                            Detalhes
                        </Link>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}