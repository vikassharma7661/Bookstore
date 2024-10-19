import React from 'react'

function Cards({ book }) {
  return (
    <>
    <div className="md:mt-12 md:pe-0 mt-4 px-4 hover:scale-105 duration-200">
    <div className="card w-96  shadow-xl">
  <figure>
    <img
    src={book.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {book.title}
      <div className="badge badge-secondary">{book.catageries}</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${book.prize}</div>
      <button className="btn btn-outline btn-secondary">Buy Now!</button>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards