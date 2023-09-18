// import Carosel from "./Carosel"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from '../Data'
import HeroCard from "./HeroCard";
export default function Hero(){
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
    const books = Data.map((book)=> {
    return <HeroCard key={book.id} url={book.url} deskripsi={book.deskripsi} judul={book.judul} penulis={book.penulis} penerbit={book.penerbit} halaman={book.halaman} isbn={book.isbn} ukuran={book.ukuran}  harga={book.harga} />

})

    return(
        <>
        <Carousel autoPlay={true} showDots={true} infinite={true} transitionDuration={500} responsive={responsive}>{books}</Carousel>
        </>
    )
}
