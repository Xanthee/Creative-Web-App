import { Link } from "react-router-dom"

export default function Footer() {
    return(
        <footer className="vw-full m-3 p-5 border rounded-lg bg-green-900 h-3/5 text-white">
            <div class="flex flex-row">
                <span className="text-left text-2xl w-1/5 mr-4 text-base hover:text-4xl hover:tracking-widest transition-all duration-300"> Every Bean, Every Brew, Perfected®</span>
                <div className="flex flex-col mb-3">
                    <h3>LONDON</h3>
                    <p>lunacafe@gmail.com</p>
                    <p>+44 07583 330497</p>
                    <p>123 example street, London</p>
                    <p>EC1A 1BB, United Kingdom</p>
                    <Link to={'/location'} className="text-white underline pt-3">See on map</Link>
                </div>
                
                <p>© 2024 Your Company. All rights</p>
                <p>© 2024 Your Company. All rights</p>
            </div>
            <p className="text-center">© 2024 Luna Cafe. All rights</p>
        </footer>
    );
}