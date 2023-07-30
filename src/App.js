import Header from "./components/Header";
import './index.css';
import HeroSection from "./components/heroSection";
import ServiceCard from "./components/serviceCard";
import icon1 from "./images/icon-access-anywhere.svg";
import icon2 from "./images/icon-any-file.svg";
import icon3 from "./images/icon-security.svg";
import icon4 from "./images/icon-collaboration.svg";
import arrowIcon from "./images/icon-arrow.svg";
import illustration from "./images/illustration-stay-productive.png";
import CustonButton from "./components/custonButton";
import Touch from "./components/touch";
import EarlyAccess from "./components/earlyAccess";
import Footer from "./components/footer";


function App() {
  return (
    <div className='bg-[#182330] pt-5 w-full text-white'>
      <Header/>
      <HeroSection/>
      <CustonButton/>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[70%] lg:mx-auto mt-32 gap-14 px-10">
          <ServiceCard image ={icon1} title ="Store any type of file" text=" whether you are sharing holiday"/>
          <ServiceCard image ={icon2} title ="Store any type of file" text=" whether you are sharing holiday"/>
          <ServiceCard image ={icon3} title ="Store any type of file" text=" whether you are sharing holiday"/>
          <ServiceCard image ={icon4} title ="Store any type of file" text=" whether you are sharing holiday"/>
      </div>

      <div className="flex flex-col lg:flex-row lg:w-[90%] lg:mx-auto gap-14 mx-5 mt-28">
          <img src={illustration} alt="illustration" className="lg:w-[30%]"/>
          <div className="flex flex-col lg:justify-center gap-5">
            <h3 className="text-lg text-center font-semibold">Stay productive, wherever you are</h3>
              <p className="text-sm font-thin mx-auto">Never let location be an issue when accessing your files, fylo has you covered for all your file storage needs.</p>
              <p className="text-sm font-thin">Securely share files and folders with friends, family and colleages for live collaboration, no email attachments required.</p>
            <div className="flex gap-1">
              <p className="text-sm font-thin">See how fylo works</p>
              <img src={arrowIcon} alt="Arrow icon"/>
            </div>
          </div>
            <div className="w-32 h-[1px] bg-white"></div>
        </div>
      <Touch/>
      <EarlyAccess/>
      <Footer/>
    </div>
  );
}

export default App;
