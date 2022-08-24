import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Form from '../../components/Form/Form'
import Layout from '../../layout/Layout'
import { getContactById } from '../../service/serviceContacts'

import './EditContactStyle.css'

const EditClient = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(["getContactToEdit", id], () => getContactById(id));

  return (
    <Layout>
      <div className="edit-container">
        <h1>Edit Contact</h1>
        <span>Change the fields you need to edit the contact</span>
        <Form contact={data}/>
      </div>
    </Layout>
  )
}

export default EditClient