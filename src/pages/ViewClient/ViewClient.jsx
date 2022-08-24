import React from 'react'
import { useQuery } from 'react-query'
import Layout from '../../layout/Layout'
import avatar from '../../assets/avatar.png'
import Spinner from '../../components/Spinner/Spinner'

import './ViewClient.css'
import { useParams } from 'react-router-dom'
import { getContactById } from '../../service/serviceContacts'

const ViewClient = () => {

  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(['getContactById', id], () => getContactById(id), {
    keepPreviousData: true
  })

  
  if (isLoading) {
    return <Spinner/>
  }

  if (isError) {
    return (
      <div className='error-block'>
        <h1>There´s been an error, please try again!</h1>
      </div>
    )
  }

  return (
    <Layout>
      <div className='contact-container'>
        <div className='contact-left'>
          <h2>{data?.name}</h2>
          <div className='info-block'>
            <div className='info-block-labels'>
              <span>Email:</span>
              <span>Tel:</span>
              <span>Company:</span>
              <span>Notes:</span>
            </div>
            <div className='info-block-user'>
              <p>{data?.email}</p>
              <p>{data?.tel}</p>
              <p>{data?.company}</p>
              <p>{data?.notes}</p>
            </div>
          </div>
        </div>
        <div className='contact-right'>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </Layout>
  )
}

export default ViewClient