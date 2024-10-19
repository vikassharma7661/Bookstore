import React from 'react'
import List from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Course() {
    console.log(List)
    return (
        <div className='w-full  md:px-24'>
            <div className='mt-14 text-center justify-center items-center'>
                <h1 className='font-semibold md:text-4xl '>We're delighted to have you <span className='text-pink-500'>Here:)</span> </h1>
                <p className='mt-12 text-md'>Dive into our extensive collection of both free and paid books, featuring a wide range of categories to suit every reader's taste. From fiction and non-fiction to self-help, educational resources, and more, you'll find the perfect book to enjoy. Browse through our selection, place your order, and immerse yourself in captivating stories or informative reads. Whether you're buying or enjoying free books, we've got something for everyone!</p>
                <Link to='/'>
                    <button className='btn btn-secondary hover:bg-pink-800 hover:text-white'>BACK</button>
                </Link>
            </div>
            <div className='grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 grid-cols-1 wrap'>
                { List.map((book)=> (
                <Cards book={book} key={book.id}/>
                ) )}
            </div>
        </div>
    )
}

export default Course