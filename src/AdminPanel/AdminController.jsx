import React from 'react'
import ProductCreation from './ProductCreation'
import UserList from './UserList'
import UserEdit from './UserEdit'

const AdminController = () => {
  return (
    <>
    <ProductCreation></ProductCreation>
    {/* <UserList></UserList> */}
    <UserEdit></UserEdit>
    </>
  )
}

export default AdminController
