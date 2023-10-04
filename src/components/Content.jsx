import Mitra1 from "../../public/assets/icons/mitra2.svg"
import Mitra2 from "../../public/assets/icons/mitra3.svg"
import Mitra3 from "../../public/assets/icons/mitra4.svg"
import Mitra4 from "../../public/assets/icons/Mitra1.svg"


export default function Content() {
    return (
        <section id="Content" className="bg-secondary  ">
            <div className="text-4xl py-4 text-primary text-center md:py-0">
                MITRA
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 max-w-6xl  md:h-[450px] font-mono px-4 py-2 md:mx-auto md:flex-row md:items-center md:justify-center md:space-x-4 md:space-y-0">
                <div className="px-3 py-6 rounded-xl shadow-lg bg-slate-200 w-2xl ">
                    <img src={Mitra2} alt="" className="w-44 h-36 mx-auto" />
                    <h2 className="text-2xl font-[sans-serif] font-semibold mt-4 text-center">Ultra Prestigous</h2>
                </div>
                <div className="px-3 py-6 rounded-xl shadow-lg bg-slate-200 w-2xl ">
                    <img src={Mitra3} alt="" className="w-44 h-36 mx-auto" />
                    <h2 className="text-2xl font-[sans-serif] font-semibold mt-4 text-center">Limited Stock</h2>
                </div>
                <div className="px-3 py-6 rounded-xl shadow-lg bg-slate-200 w-2xl ">
                    <img src={Mitra4} alt="" className="w-44 h-36 mx-auto" />
                    <h2 className="text-2xl font-[sans-serif] font-semibold mt-4 text-center">Sibling Clone</h2>
                </div>
                <div className="px-3 py-6 rounded-xl shadow-lg bg-slate-200 w-2xl ">
                    <img src={Mitra1} alt="" className="w-44 h-36 mx-auto" />
                    <h2 className="text-2xl font-[sans-serif] font-semibold mt-4 text-center">Power QC</h2>
                </div>
            </div>
        </section>
    )
}