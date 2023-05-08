import supportApp from '../assets/imgs/supportApps.png'
import supportCode from '../assets/imgs/supportCode.png' 
import supportCoffee from '../assets/imgs/supportCoffee.png'

const Support = () => {
    return (
      <div className="flex justify-center">
        <div className="max-w-[1640px] m-auto px-4">
            <h2 className='flex justify-center text-6xl text-onorange title-font mb-20'>
                Support Us
            </h2>
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="max-w-sm bg-onorange border border-onorange600 rounded-lg shadow">
                    <a href="#">
                        <img className="rounded-t-lg" src={supportCode} alt="Image of a coding screen" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-onwhite">Support us by coding!</h5>
                        </a>
                        <p className="mb-3 font-normal text-onwhite">Join our community of contributors and help us improve the app by coding on our open source project.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-onwhite bg-onorange600 rounded-lg hover:bg-onorange700">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-onorange border border-onorange600 rounded-lg shadow">
                    <a href="#">
                        <img className="rounded-t-lg" src={supportCoffee} alt="Logo of Buy Me a Coffee" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-onwhite">Support us by donating!</h5>
                        </a>
                        <p className="mb-3 font-normal text-onwhite">"By donating on Buy Me a Coffee, you can help us continue developing and improving our app to enhance the learning experience.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-onwhite bg-onorange600 rounded-lg hover:bg-onorange700">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm bg-onorange border border-onorange600 rounded-lg shadow">
                    <a href="#">
                        <img className="rounded-t-lg" src={supportApp} alt="Image with the android and apple logos" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-onwhite">Support us by playing!</h5>
                        </a>
                        <p className="mb-3 font-normal text-onwhite">Help us reach more aspiring musicians by downloading and using our app on the App Store or Google Play.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-onwhite bg-onorange600 rounded-lg hover:bg-onorange700">
                            Read more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Support;