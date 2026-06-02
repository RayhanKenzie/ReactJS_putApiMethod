import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <section className="group flex">
                        <span className="text-xl font-bold tracking-widest text-gray-900 uppercase transition-colors group-hover:text-lime-600 dark:text-white group-hover:dark:text-lime-400">Consume<span className="text-lime-600 transition-colors group-hover:text-gray-900 dark:text-lime-400 dark:group-hover:text-white">API</span></span>
                    </section>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link to="/" className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"> Home </Link>                                    
                                </li>

                                <li>
                                    <Link to="/profile" className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" > Profile </Link>
                                </li>

                                <li>
                                    <Link to="/contact" className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"> Contacts </Link>
                                </li>

                                <li>
                                    <Link to="/delete" className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"> Delete </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-4">
                                <a className="block shrink-0 rounded-full bg-white p-2.5 text-gray-600 transition hover:text-gray-700 dark:bg-gray-800 dark:text-white dark:hover:text-white/75" href="#">
                                    <span className="sr-only">Notifications</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </a>
                            </div>

                            <a href="#" className="block shrink-0">
                                <span className="sr-only">Profile</span>
                                <img alt="react" src="./react.svg" className="h-10 w-10 rounded-full object-fit" />
                            </a>

                            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                                <span className="sr-only">Toggle menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;