import orangeNotes from '../assets/imgs/OrangeNotes.png'
import orangePhone from '../assets/imgs/orangephone.png'
import FullScreenNotes from '../assets/imgs/FullScreenMusicNotes2.png'
import ReactTyped from 'react-typed';

const HeroBanner = () => {
  return (
    <div id='home'>
      <div className="lg:mt-36 sm:mt-40 mt-32 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 sm:-translate-y-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6 text-center lg:text-left">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-s font-semibold tracking-wider uppercase bg-teal-accent-400 text-ongray rounded-full">Openotes</p>
              </div>
              <h2 className="font-sans text-4xl font-bold tracking-tight text-ongray sm:text-5xl sm:leading-none max-w-lg mb-6">
                Making Music More&nbsp;democratic.
              </h2>
              <h2 className='font-sans text-4xl font-bold tracking-tight text-ongray sm:text-5xl sm:leading-none max-w-lg mt-6'>
                <span>Learn&nbsp;Piano:</span>
                <ReactTyped className='text-onorange lg:inline block lg:mt-0 mt-2' strings={['&nbsp;Anywhere!', '&nbsp;By&nbsp;Yourself!', '&nbsp;Anytime!', '&nbsp;For&nbsp;Free!']} typeSpeed={80} backSpeed={100} loop/>
              </h2>
            </div>
            <div className="flex items-center justify-center lg:justify-normal mt-8">
            <button type="button" className=
            "focus:outline-none text-white bg-onorange400 hover:bg-onorange font-medium rounded-lg px-8 py-3">
            Learn More!</button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2 z-20">
            <div className="w-2/5">
              <img className="object-cover" src={orangeNotes} alt="Music notes" />
            </div>
            <div className="w-5/12 -ml-16 lg:-ml-32">
              <img className="object-cover" src={orangePhone} alt="Phone running Openotes" />
            </div>
          </div>
        </div>
      </div>
      <img src={FullScreenNotes} alt="Section divison made of music notes" className='hidden lg:block z-10 -translate-y-24'/>
    </div>
  );
};

export default HeroBanner