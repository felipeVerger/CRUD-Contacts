import React from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import Client from '../../components/Client/Client'
import Layout from '../../layout/Layout'
import Spinner from '../../components/Spinner/Spinner'
import { deleteContact, getAllContacts } from '../../service/serviceContacts'

import './HomeStyle.css'

const Home = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery('getAllContacts', getAllContacts);

  const mutation = useMutation(deleteContact, {
    onSuccess: () => {
      queryClient.invalidateQueries('getAllContacts');
    }
  })

  const handleDelete = async (id) => {
    mutation.mutate(id);   
  }

  if (isLoading) {
    return <Spinner/>
  } 

  return (
    <Layout>
      <div className='home-container'>
        <h1>Contacts</h1>
        <span>Manage your contacts</span>
        <div className='home-content'>
          <ul>
            <li>Name</li>
            <li>Contact</li>
            <li>Company</li>
            <li>Actions</li>
          </ul>
        </div>
        {
          data?.map((contact) => (
            <Client
              key={contact.id}
              contact={contact}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default Home