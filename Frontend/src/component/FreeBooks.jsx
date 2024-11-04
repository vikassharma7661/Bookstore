import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Cards from './Cards';

function FreeBooks() {
  const [Book, SetBook] = useState([]);

  useEffect(() => {
    const GetBook = async () => {
      try {
        const res = await axios.get('http://localhost:4001/book');
        const data = res.data.filter((data) => data.category === 'free');
        SetBook(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    GetBook();

    const handleResize = () => {
      window.dispatchEvent(new Event("resize"));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    lazyLoad: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-16">
      <div className="text-center md:px-16 md:mt-16">
        <h1 className="font-semibold text-3xl md:text-4xl mb-6 md:mb-10">
          Get Free Book Orders Now!
        </h1>
        <p className="text-base md:text-lg mb-8 md:mb-12">
          Discover an exciting opportunity to order books for free on our site! Whether you're looking for the latest bestsellers, timeless classics, or educational materials, we’ve got you covered. Our wide selection ensures there's something for everyone, and with no cost attached, you can start building your dream collection today.
        </p>
      </div>

      <div className="w-full">
        {Book.length > 0 ? (
          <Slider {...settings}>
            {Book.map((book) => (
              <Cards book={book} key={book.id} />
            ))}
          </Slider>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default FreeBooks;
