import React from 'react'

const Book = ({book}) => {
    const {bookName,image,author,tags,category,rating} = book;
  return (
    <div className="card bg-base-100 shadow border-2">
  <figure className="m-6 p-4 rounded-lg bg-gray-300">
    <img
      src={image}
      alt={bookName}
      className="rounded-xl h-44" />
  </figure>
  <div className="m-6 mt-0 space-y-3 items-start">
    {tags.map((tag,indx)=><button key={indx} className='bg-gray-100 text-sm font-bold py-1 text-green-500 rounded-full px-6 mr-2'>{tag}</button>)}
    <h2 className="card-title">{bookName}</h2>
    <p className='border-b-2 border-dashed pb-4'>By: {author}</p>
    <div className="flex justify-between">
        <p>{category}</p>
        <div className='flex gap-2'>
            <p>{rating}</p>
            <div className="rating">
               <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
        </div>
        
    </div>
  </div>
</div>
  )
}

export default Book