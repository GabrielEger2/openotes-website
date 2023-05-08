import appStore from '../assets/imgs/app-store.png';
import playStore from '../assets/imgs/google-play.png';

const About = () => {
  return (
        <div className="lg:mt-36 sm:mt-40 mt-32 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6 text-center lg:text-left">
                    <div className='mb-12'>
                    <p className="inline-block px-3 py-px mb-4 text-s font-semibold tracking-wider uppercase bg-teal-accent-400 text-ongray rounded-full">Openotes</p>
                    <h2 className="font-sans text-4xl font-bold tracking-tight text-ongray sm:text-5xl sm:leading-none max-w-lg mb-6">
                    Available for <span className="text-onorange">free</span> on all platforms.
                    </h2>
                    <h2 className='font-sans text-4xl font-bold tracking-tight text-ongray sm:text-5xl sm:leading-none max-w-lg mt-6'>
                    Reviews:
                    </h2>
                </div>
                <div className="flex items-center mb-3 justify-center">
                        <svg aria-hidden="true" className="w-5 h-5 text-onyellow400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-onyellow400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-onyellow400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-onyellow400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-onyellow400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-sm font-medium text-black">4.95 out of 5</p>
                    </div>
                    <p className="text-sm font-medium text-gray-500">1,745 global ratings</p>
                    <div className="flex items-center mt-4 justify-center">
                        <span className="text-sm font-medium text-onblue600">5&nbsp;star</span>
                        <div className=" w-60 md:w-96 h-5 mx-4 bg-gray-200 rounded">
                            <div className="h-5 bg-onyellow400 rounded" style={{ width: "70%"}}></div>
                        </div>
                        <span className="text-sm font-medium text-onblue600">70%</span>
                    </div>
                    <div className="flex items-center mt-4 justify-center">
                        <span className="text-sm font-medium text-onblue600">4&nbsp;star</span>
                        <div className="w-60 md:w-96 h-5 mx-4 bg-gray-200 rounded">
                            <div className="h-5 bg-onyellow400 rounded" style={{ width: "17%"}}></div>
                        </div>
                        <span className="text-sm font-medium text-onblue600">17%</span>
                    </div>
                    <div className="flex items-center mt-4 justify-center">
                        <span className="text-sm font-medium text-onblue600">3&nbsp;star</span>
                        <div className="w-60 md:w-96 h-5 mx-4 bg-gray-200 rounded">
                            <div className="h-5 bg-onyellow400 rounded" style={{ width: "8%"}}></div>
                        </div>
                        <span className="text-sm font-medium text-onblue600">8%</span>
                    </div>
                    <div className="flex items-center mt-4 justify-center">
                        <span className="text-sm font-medium text-onblue600">2&nbsp;star</span>
                        <div className="w-60 md:w-96 h-5 mx-4 bg-gray-200 rounded">
                            <div className="h-5 bg-onyellow400 rounded" style={{ width: "4%"}}></div>
                        </div>
                        <span className="text-sm font-medium text-onblue600">4%</span>
                    </div>
                    <div className="flex items-center mt-4 justify-center">
                        <span className="text-sm font-medium text-onblue600">1&nbsp;star</span>
                        <div className="w-60 md:w-96 h-5 mx-4 bg-gray-200 rounded">
                            <div className="h-5 bg-onyellow400 rounded" style={{ width: "1%"}}></div>
                        </div>
                        <span className="text-sm font-medium text-onblue600">1%</span>
                    </div>
                </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2 lg:translate-y-4">
                    <blockquote className=" text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic font-semibold lg:text-left text-ongray lg:translate-x-8 translate-x-0 lg:mt-2">
                        <p>"<span className="title-font text-onorange">Openotes</span> translates sheet music into easy-to-follow tutorials, making music accessible to everyone regardless of skill level or financial constraints. Start playing your favorite songs today!"</p>
                        <div className="mt-6 flex items-center justify-center lg:justify-normal space-x-3">
                            <a href="/" className="w-40 lg:w-52 transition duration-300 hover:shadow-lg">
                            <img src={appStore} className="object-cover object-top w-full h-auto mx-auto" alt="" />
                            </a>
                            <a href="/" className="w-40 lg:w-52 transition duration-300 hover:shadow-lg">
                            <img src={playStore} className="object-cover object-top w-full h-auto mx-auto" alt="" />
                            </a>
                        </div>
                    </blockquote>
                </div>   
            </div>
        </div>
  )
}

export default About