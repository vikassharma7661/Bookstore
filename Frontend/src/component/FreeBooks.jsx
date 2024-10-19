import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from '../../public/list'
import Cards from './Cards';
function FreeBooks() {
    const AllFreebook = List.filter((data)=> data.catageries === "free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   <>
   <div className="w-full mx-auto px-4 my-10 ">
    <div className='md:px-16 md:mt-40 mt-12'>
        <div>
        <h1 className='font-semibold text-4xl my-10'>Get Free Book Orders Now!</h1>
        <p className='text-lg'>Discover an exciting opportunity to order books for free on our site! Whether you're looking for the latest bestsellers, timeless classics, or educational materials, we’ve got you covered. Our wide selection ensures there's something for everyone, and with no cost attached, you can start building your dream collection today. Don’t miss out—explore our free book offers now and place your order to enjoy enriching reads delivered straight to your door!</p>
        </div> 
        <div className=''>        <Slider {...settings}>
            {AllFreebook.map((book)=>(
                <Cards book={book} key={book.id}/>
            ))}
      </Slider>
      </div>

    </div>
   </div>
   <div>
   </div>
   </>
  )
}

export default FreeBooks