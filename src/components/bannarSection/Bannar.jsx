import React from 'react'
import bannarImage from '../../assets/books.jpg'

const Bannar = () => {
  return (
    <div className="hero h-[400px] bg-base-200 rounded-lg mt-4">
  <div className="hero-content flex-col gap-32 lg:flex-row-reverse">
    <img
      src={bannarImage}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="max-w-lg text-5xl font-bold mb-8">Books to freshen up your bookshelf</h1>
      <button className="btn bg-[#23BE0A] w-40 mt-6 text-lg font-bold text-white">View the List</button>
    </div>
  </div>
</div>
  )
}

export default Bannar