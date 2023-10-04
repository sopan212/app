

import Footer  from '../global/Footer'
import Header from '../global/Header.jsx';
import { Link, useParams } from 'react-router-dom';
import Data from '../Data.js';





export default function BooksDetail() {

  const { id } = useParams();

  const selectedBook = Data.find((data) => {
    return data.id === id
  })
  // useEffect(() => {
  //   fetch(selectedBook)
  //     .then(response => response.json())
  //     .then(data => setBook(data));
  // }, []);

  console.log(selectedBook)

  // if (!selectedBook) {
  //   return <div>Loading...</div>;
  // }
  return (
    <section>
      <Header />
      {/* <h1>Books Details{id}</h1> */}
      <div className='container mx-auto'>
        <div>
          <h2 className='text-2xl text-center mt-8'>Books detail</h2>
       </div>
<div className='flex flex-row justify-center item-center space-x-8 mt-8'>
  <div className='w-2xl'> 
    <img src={selectedBook?.url} alt="book"  className='w-96'/><br/>
    <Link to="https://tokopedia.link/VYYWISMVKCb" className='px-4 py-2 bg-primary font-mono text-white mx-auto shadow-sm rounded-md'>Beli Disini</Link>
    <Link to={`/books`} className='px-4 py-2 ml-4 bg-primary font-mono text-white mx-auto shadow-sm rounded-md'>Kembali</Link>
    </div>
    <div>
     <h2 className='font-mono'><span className='font-bold'>Judul: </span>{selectedBook.judul}</h2>
     <h2 className='font-mono'><span className='font-bold'>Penulis: </span>{selectedBook.penulis}</h2>
     <h2 className='font-mono'><span className='font-bold'>Penerbit :</span>{selectedBook.penerbit}</h2>
     <h2 className='font-mono'><span className='font-bold'>Halaman: </span>{selectedBook.halaman}</h2>
     <h2 className='font-mono'><span className='font-bold'>Ukuran: </span>{selectedBook.ukuran}</h2>
     <h2 className='font-mono'><span className='font-bold'>ISBN: </span>{selectedBook.isbn}</h2>
     <h2 className='font-mono'><span className='font-bold'>Harga: </span>{selectedBook.harga}</h2>
     <h2  className='font-mono max-w-2xl max-h-2xl '><span className='font-bold'>Deskripsi: </span>{selectedBook.deskripsi}</h2>
    </div>
 
</div>
      </div>
      <Footer />
    </section>
  )
}
