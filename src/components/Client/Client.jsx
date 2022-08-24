import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ClientStyle.css'

const Client = ({ contact, handleDelete }) => {
  const {name, company, email, tel, id } = contact;

  const navigate = useNavigate();

  return (
    <div className='client-container'>
        <div className='client-info'>
            <h4>{name}</h4>
            <div className='client-info-contact'>
                <p><span>email:</span> {email}</p>
                <p><span>tel:</span> {tel}</p>
            </div>
            <h4 className="company">{company}</h4>
            <div className='client-info-actions'>
                <button
                    className='btn-view'
                    onClick={() => navigate(`/${id}`)}
                >View</button>
                <button
                    className='btn-edit'
                    onClick={() => navigate(`/edit/${id}`)}
                >Edit</button>
                <button
                    className='btn-delete'
                    onClick={() => handleDelete(id)}
                >Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Client