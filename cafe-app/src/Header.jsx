import { Link } from "react-router-dom"

//NOTE: Having header as its own seperate file, we can access header as an object in each page. MUST BE IMPORTED FIRST
export default function Header() {
    return(
        <header className="p-4 flex justify-around items-center">
            <a href="" className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 -rotate-45">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            <span className="font-bold text-xl">Cafe</span>
            </a>

            <div className="flex p-3 pl-10 ">
            <div className="pr-2 font-bold text-l">Menu</div>
            <div className="px-2 font-bold text-l">Book a table</div>   
            <div className="px-2 font-bold text-l">Our coffee</div>     
            <div className="px-2 font-bold text-l">About us</div>     
            </div>

            <div className="flex p-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="font-bold text-sm pl-1 mr-2">Find our cafe</span>
            <Link to={'/register'} className="font-bold text-sm mr-2 px-3 py-1 bg-black text-white border border-black rounded-full">Join now</Link>
            <Link to={'/login'} className="font-bold text-sm mr-2 px-3 py-1 border border-black rounded-full">Sign in</Link>
            </div>

        </header>
    );
}