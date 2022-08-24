import React from 'react'
import Form from '../../components/Form/Form'
import Layout from '../../layout/Layout'

import './NewClientStyle.css'

const NewClient = () => {


  return (
    <Layout>
      <div className='new-client-container'>
        <h1>New Contact</h1>
        <span>Fill the fields to register a contact</span>
        <Form/>
      </div>
    </Layout>
  )
}

export default NewClient