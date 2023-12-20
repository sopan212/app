import { Link } from "react-router-dom"
import TextBook from "../../public/assets/book/textbooks.png"



export default function Main() {
    return (
        <>
            <div className="bg-lightColor mb-12">
                <div>
                    <p className="text-center text-4xl mb-6 text-primary mt-6">Layanan Kami</p>
                </div>
                <div className="flex flex-col px-4 spce-y-4 items-center justify-center md:flex-row md:space-y-0 md:space-x-8">

                    {/* Card container */}
                    <div></div>
                    {/* <Router> */}
                    <Link to="/books" className=" group px-4 py-4 max-w-4xl rounded-lg shadow-sm bg-secondary mb-4">
                        <a href="">
                            <img src={TextBook} alt="" className="w-72 group-hover:-translate-y-3 duration-300" />
                            <div className="px-5 py-3 border border-border rounded-lg shadow-sm mt-2 text-center font-mono hover:bg-primary hover:bg-opacity-50">Books</div>
                        </a>
                    </Link>


                    {/* </Router> */}
                </div>
            </div>
        </>
    )
}