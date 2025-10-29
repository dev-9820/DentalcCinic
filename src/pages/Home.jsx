import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import tooth from "../assets/tooth.png"
import { MdOutlineArrowRight } from "react-icons/md";
import ServiceSection from "../components/ServiceSection"
import AboutClinic from "../components/AboutClinic"
import TeamSection from "../components/TeamSection"
import Footer from "../components/Footer"
const UNSPLASH_ACCESS_KEY = "jPpxVf-IPYGFYlflPH3Nfg3uWTmy3pSCCSmdYS0ZLfo";

export default function Home() {
  const [term, setTerm] = useState("");
  const [images, setImages] = useState([]);
  const [topSearches, setTopSearches] = useState([]);
  const [history, setHistory] = useState([]);
  const [selectedImages, setSelectedImages] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);
  

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-[#012563] to-[#144BAF]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="mx-40 px-4 pt-16">
        <h1 className="text-5xl text-white lg:text-[94px] text-center font-bold mb-6">
              HEALTHY TEETH, HAPPY LIFE
            </h1>
        <div className="flex flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/3 h-[530px] flex flex-col justify-between text-white mb-12 lg:mb-0">
            <div className="border border-white/20 w-fit py-2 px-4 rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                STREET 44, BANDRA
            </div>


            <p className="text-xl lg:text-[17px] mb-8 leading-relaxed max-w-md">
              Experience multi-class dental care in a warm and welcoming environment. 
              Let us help you achieve the healthy, confident, lively smile you deserve.
            </p>

           
          </div>

          {/* Middle Content - Image Space */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="w-80 h-80 lg:w-[580px] lg:h-[580px] flex items-center justify-center backdrop-blur-sm">
              <img src={tooth} alt="Healthy Teeth" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Right Content - Image Space */}
          <div className="lg:w-1/3 h-[530px] items-end flex flex-col justify-between text-white mb-12 lg:mb-0">
            {/* Contact Section */}
            <div className="flex items-center">
              <div className="border border-white/20 w-fit py-2 px-4 rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                +99 9999 99999
              </div>
              <div className="border border-white/20 w-fit p-2 mx-2 text-xl rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer hover:text-green-400">
                <IoLogoWhatsapp />
              </div>
              <div className="border border-white/20 w-fit p-2 text-xl rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer hover:text-blue-400">
                <IoCall />
              </div>
            </div>

            {/* About Clinic Card */}
            <div className="bg-white/20 mb-7 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 w-64 rounded-xl p-4 cursor-pointer group">
              <div className="flex items-center gap-4">
                {/* Image Container */}
                <div className="h-16 w-16 min-w-16 rounded-lg overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg" 
                    alt="Dental Clinic" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm leading-tight group-hover:text-blue-100 transition-colors duration-300">
                    About The Clinic
                  </p>
                </div>
                
                {/* Arrow */}
                <div className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300">
                  <MdOutlineArrowRight className="bg-white rounded-full text-2xl p-1 text-[#012563] group-hover:bg-blue-100 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="services">
      <ServiceSection/>
      </section>
      
      <section id="about">
      <AboutClinic/>
      </section>

      <section>
      <TeamSection/>
      </section>

      
      <Footer/>

    </div>
  );
}