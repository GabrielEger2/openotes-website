const NewsLetter = () => {
  return (
    <div className="bg-onorange mt-16 mb-16 text-ongray" id="news">
        <div className="px-6 py-2 md:py-12 md:px-12 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="mt-6 md:mt-12 lg:mt-0">
                        <h1
                        className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6  md:mb-12 text-onwhite"
                        >
                        Stay in Tune. <br/> Don't Miss Anything!
                        </h1>
                        <p className="md:mb-4 lead text-onwhite font-bold">
                            Don't worry. At our newsletter, we believe that quality always trumps quantity
                        </p>
                    </div>
                <div className="mb-6 md:mb-12 lg:mb-0">
                    <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                    <h2 className="text-3xl font-bold mb-12">Subscribe to the newsletter</h2>
                    <form>
                        <div className="form-group mb-6">
                        <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-onorange400 focus:outline-none"
                            placeholder="Name"
                        />
                        </div>
                        <div className="form-group mb-6">
                        <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-onorange400 focus:outline-none"
                            placeholder="Email address"
                        />
                        </div>
                        <div className="form-group form-check text-center mb-6">
                        <input
                            type="checkbox"
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-onorange400 checked:border-onorange400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                        />
                        <label
                            className="form-check-label inline-block text-gray-800"
                            >I have read and agree to the terms</label
                        >
                        </div>
                        <button
                        type="submit"
                        className="w-full px-6 py-2.5 bg-onorange400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-onorange hover:shadow-lg focus:bg-onorange focus:shadow-lg focus:outline-none focus:ring-0 active:bg-onorange active:shadow-lg transition duration-150 ease-in-out"
                        >
                        Subscribe
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter