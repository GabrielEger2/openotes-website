const Footer = () => {
    const current_year = new Date().getFullYear(); // Get the current year

    return (
        <footer className=" mt-16 lg:mt-32 bg-onorange">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 sm:gap-x-0 lg:gap-24 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm text-onwhite uppercase font-bold">Creator</h2>
                        <ul className="text-onwhite font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Github</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Buy Me a Coffee</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm text-onwhite uppercase font-bold">Legal</h2>
                        <ul className="text-onwhite font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms & Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm text-onwhite uppercase font-bold">Follow us</h2>
                        <ul className="text-onwhite font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Github</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm text-onwhite uppercase font-bold">DOWNLOAD</h2>
                        <ul className="text-onwhite font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">iOS</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Android</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-onorange600 md:flex md:items-center md:justify-between">
                <div className="mx-auto w-full max-w-screen-xl px-4 py-6">
                    <span className="text-sm font-bold text-onwhite sm:text-center">© {current_year} <a>Openotes</a>. MIT License.
                    </span>
                </div>
            </div>
        </footer>
  )
}

export default Footer