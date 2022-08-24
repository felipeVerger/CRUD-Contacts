import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import { createContact, updateContact } from '../../service/serviceContacts'
import Spinner from '../Spinner/Spinner'
import './FormStyle.css'

const Form = ({ contact }) => {
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    tel: '',
    notes: ''
  })

  const postMutation = useMutation(createContact, {
    onSuccess: () => {
      queryClient.invalidateQueries('getAllContacts')
    }
  })

  const putMutation = useMutation(updateContact, {
    onSuccess: () => {
      queryClient.invalidateQueries('getAllContacts')
    }
  })

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(formData).length > 0) {
        postMutation.mutate(formData)
        navigate('/')
    } else if (postMutation.isError) {
        alert('Ther´s been an error. Please try again')
    }
  }

  if (postMutation.isLoading) {
    return <Spinner/>
  }


  return (
    <div className='form-container'>
          <h2>{contact?.name ? 'Edit Contact' : 'Add Contact'}</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                name='name'
                id="name"
                // value={contact?.name ?? ''}
                placeholder='Name of the contact'
                onChange={handleChange}
              />
            </label>
            <label htmlFor="company">
              Company:
              <input
                type="text"
                name='company'
                id="company"
                // value={contact?.company ?? ''}
                placeholder='Company of the contact'
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name='email'
                id="email"
                // value={contact?.email ?? ''}
                placeholder='Email of the contact'
                onChange={handleChange}
              />
            </label>
            <label htmlFor="tel">
              Tel:
              <input
                type="tel"
                name='tel'
                id="tel"
                // value={contact?.tel ?? ''}
                placeholder='Tel of the contact'
                onChange={handleChange}
              />
            </label>
            <label htmlFor="notes">
              Notes:
              <textarea
                type="text"
                name='notes'
                id="notes"
                // value={contact?.notes ?? ''}
                placeholder='Notes of the contact'
                onChange={handleChange}
              />
            </label>
            <button type='submit'>{contact?.name ? 'Edit Contact' : "Add Contact"}</button>
          </form>
        </div>
  )
}

export default Form