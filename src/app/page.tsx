'use client';
import JewelryBox from "./JewelryBox";
import News from "./News";
import About from "./About";
import BoothConcept from "./Booth Concept";
import InteractiveButton from './InteractiveButton';
import React, { useState } from 'react';

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState('JewelryBox');
  const [isNavOpen, setIsNavOpen] = useState(false);


  function openNav() {
    const sideBar = document.getElementById("sideBar");
    const sideNav = document.getElementById("sideNav");
    if (sideBar && sideNav) {
      sideBar.style.width = "100%";
      sideNav.style.width = "60%";
    }
    setIsNavOpen(true);
  }

  function exitNav() {
  const sideBar = document.getElementById("sideBar");
  const sideNav = document.getElementById("sideNav");
  if (sideBar && sideNav) {
    sideBar.style.width = "0";
    sideNav.style.width = "0";
  }
  setIsNavOpen(false);
}

  return (
    <main className="flex flex-col h-screen w-screen">
      <nav className="bg-red-700 text-2xl text-center w-full text-white flex flex-row items-center h-12 p-2">
        <div onClick={openNav} className="sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="18.853" height="12" viewBox="0 0 18.853 12" className="hover:cursor-pointer">
            <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-4.5 -8)">
              <path id="Path_3" data-name="Path 3" d="M4.5,18H23.353" transform="translate(0 -4)" fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="2"/>
              <path id="Path_4" data-name="Path 4" d="M4.5,9H23.353" transform="translate(0)" fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="2"/>
              <path id="Path_5" data-name="Path 5" d="M4.5,27H23.353" transform="translate(0 -8)" fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="2"/>
            </g>
          </svg>
        </div>

        <div onClick={exitNav} id="sideBar">
          <div id="sideNav" className="fixed top-0 left-0 bg-slate-300 z-10 overflow-x-hidden duration-200 font-bold flex flex-col justify-center items-center h-full w-0">
            <a onClick={exitNav} className="text-black text-3xl absolute top-0 left-0 ml-2 mt-1 hover:cursor-pointer select-none">&times;</a>

            <p className="text-red-700">Basket of Strawberries</p>

            <div className="flex flex-row gap-2 justify-center my-6">
              <InteractiveButton url="https://www.facebook.com/profile.php?id=61557517305356&mibextid=LQQJ4d" imgSrc="Icons/Facebook.png" />
              <InteractiveButton url="https://www.instagram.com/basketofstrawberry/" imgSrc="Icons/Instagram.png" />
              <InteractiveButton url="https://www.tiktok.com/@basketofstrawberry" imgSrc="Icons/TikTok.png" />
              <a href="mailto:Basketofstrawberryjewelry@gmail.com" className="rounded-full h-12 w-12">
                  <img src={"Icons/Gmail.png"} alt="" className="fill-red-700"/>
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'JewelryBox' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('JewelryBox')}>Portfolio</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'Booth Concept' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('Booth Concept')}>Booth Concept</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'About' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('About')}>About</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'News' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('News')}>News</button>
            </div>
          </div>
        </div>

        <p className={`flex-1 ${isNavOpen ? 'text-transparent' : ''}`}>Basket of Strawberries</p>

      </nav>

      <div className="flex flex-col sm:flex-row w-full flex-grow sm:overflow-hidden">
        {/* Profile Bar */}
        <div className="flex flex-col h-full w-full sm:w-1/2 xl:w-1/4 items-center overflow-auto">
          <img src="profile.jpeg" className="rounded-2xl shadow-xl h-52 w-52 my-8 object-cover"></img>
          <p className="text-red-700 text-3xl text-center">Jazmin Gong</p>
          <p className="text-black text-2xl text-center my-2">Chicago, IL</p>
          <p className="text-gray-500 text-sm text-center mx-2 my-2">Jeweler and Entrepreneur - makes beautiful jewelry and specializes in necklaces and earrings.</p>

        <div className="hidden sm:block">
            <div className="flex flex-row gap-2 justify-center my-8">
              <InteractiveButton url="https://www.facebook.com/profile.php?id=61557517305356&mibextid=LQQJ4d" imgSrc="Icons/Facebook.png" />
              <InteractiveButton url="https://www.instagram.com/basketofstrawberry/" imgSrc="Icons/Instagram.png" />
              <InteractiveButton url="https://www.tiktok.com/@basketofstrawberry" imgSrc="Icons/TikTok.png" />
              <a href="mailto:Basketofstrawberryjewelry@gmail.com" className="rounded-full h-12 w-12">
                  <img src={"Icons/Gmail.png"} alt="" className="fill-red-700"/>
              </a>
            </div>

            <div className="flex flex-col gap-2 my-10">
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'JewelryBox' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('JewelryBox')}>Portfolio</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'Booth Concept' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('Booth Concept')}>Booth Concept</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'About' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('About')}>About</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'News' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('News')}>News</button>
            </div>
          </div>
        </div>

        {
          selectedComponent === 'JewelryBox' && <JewelryBox />
        }
        {
          selectedComponent === 'Booth Concept' && <BoothConcept />
        }
        {
          selectedComponent === 'About' && <About />
        }
        {
          selectedComponent === 'News' && <News />
        }
      </div>

    </main>
  );
}

