import React from 'react'
import ShowCategory from '../../components/admin/ShowCategory'

export default function Category() {
  return (
    <div className="container">
      <div className="h4 p-3">All Categories</div>
      <div className="d-flex m-2 justify-content-between align-items-center">
        <ShowCategory />
      </div>
    </div>
  )
}
