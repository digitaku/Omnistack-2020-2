import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import heroes from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="be the heroes"/>
                <form >
                    <h1>Faça seu Logon</h1>
                    <input className=".back-link" placeholder="Sua ID" type="text"/>
                    <button className="button"type="submit">Entrar</button>
                    <Link to="/register"><FiLogIn size={16} color="#E02041"/>Não tenho Cadastro</Link>
                </form>
            </section>
            <img src={heroes} alt="Heroes"/>
        </div>
    );
}