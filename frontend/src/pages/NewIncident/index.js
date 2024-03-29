import React,{ useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';


import api from '../../services/api';
import logo from '../../assets/logo.svg';
import './styles.css';

export default function NewIncident(){
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        };
        try{
           await api.post('incidents', data, {
               headers:{
                   Authorization:ongId
               }
           });
           history.push('/profile');
        }catch(err){
            alert('erro ao cadastrar caso, tente novamente')
        }
    }
    return (
    <div className="new-incident">
    <div className="content">
        <section>
        <img src={logo} alt="be the heroes"/>
        <h1>Cadastrar novo Caso</h1>
        <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
        <Link to="/profile"><FiArrowLeft size={16} color="#E02041"/>Voltar para Home</Link>
        </section>
        <form onSubmit={handleNewIncident}>
            <input placeholder="Título do Caso" value={title} onChange={e=> setTitle(e.target.value)}/>
            <textarea placeholder="Descrição" value={description} onChange={e=> setDescription(e.target.value)}/>
            <input placeholder="Valor em reais" value={value} onChange={e=> setValue(e.target.value)}/>
            <button className="button" type="submit">
                Cadastrar
            </button>
        </form>
    </div>
</div>);
}