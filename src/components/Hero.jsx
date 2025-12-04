// import Carosel from "./Carosel"
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getAllBooks } from '../services/bookService'
import HeroCard from "./HeroCard";
export default function Hero(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const data = await getAllBooks();
        setBooks(data);
    };
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const bookCards = books.map((book)=> {
    return <HeroCard key={book.id} url={book.image_url || book.url} deskripsi={book.deskripsi} judul={book.judul} penulis={book.penulis} penerbit={book.penerbit} halaman={book.halaman} isbn={book.isbn} ukuran={book.ukuran}  harga={book.harga} />

})

    return(
        <>
        <Carousel autoPlay={true} showDots={true} infinite={true} transitionDuration={500} responsive={responsive}>{bookCards}</Carousel>
        </>
    )
}
