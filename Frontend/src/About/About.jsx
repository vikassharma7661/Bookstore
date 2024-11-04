import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center dark:bg-slate-900 dark:text-white">
        <h1 className='text-4xl font-bold text-blue-600 mt-10 mb-6 text-center dark:bg-slate-900 dark:text-white'>About Our Collection</h1>
        
        <p className='text-lg text-gray-700 mb-8 max-w-2xl text-center dark:text-white'>
          We offer a diverse collection of books to cater to every reader's needs. 
          From thrilling mysteries to romantic novels, our selection ensures that you’ll find something you love.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
          <div className='bg-white border border-gray-200 rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-semibold text-blue-500 mb-2'>Fiction</h2>
            <p className='text-gray-600'>Explore a world of imagination with our collection of fiction books ranging from contemporary to classic literature.</p>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-semibold text-blue-500 mb-2'>Non-Fiction</h2>
            <p className='text-gray-600'>Dive into real-life stories, biographies, and self-help guides that inspire and inform.</p>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-semibold text-blue-500 mb-2'>Children’s Books</h2>
            <p className='text-gray-600'>Introduce young readers to the joy of reading with our delightful collection of children's books.</p>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-semibold text-blue-500 mb-2'>Science Fiction & Fantasy</h2>
            <p className='text-gray-600'>Embark on epic adventures with our selection of sci-fi and fantasy novels.</p>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-semibold text-blue-500 mb-2'>Mystery & Thriller</h2>
            <p className='text-gray-600'>Get your heart racing with gripping mysteries and thrilling novels that keep you on the edge of your seat.</p>
          </div>

          <div className='bg-white border border-gray-200 rounded-lg shadow-md p-6'>
            <h2 className='text-2xl font-semibold text-blue-500 mb-2'>Romance</h2>
            <p className='text-gray-600'>Experience love and passion through our collection of romantic novels.</p>
          </div>
        </div>
        
        <p className='text-lg text-gray-700 mt-8 mb-10 max-w-2xl text-center dark:text-white'>
          No matter what genre you prefer, our collection has something for everyone. Come explore and find your next great read!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
