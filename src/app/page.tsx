'use client';
import Head from "next/head";
import JewelryBox from "./JewelryBox";
import News from "./News";
import About from "./About";
import BoothConcept from "./Booth Concept";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState('JewelryBox');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSocialsHovered, setIsSocialsHovered] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        exitNav();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('#sideNav') && isNavOpen) {
        exitNav();
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNavOpen]);

  function openNav() {
    const sideBar = document.getElementById("sideBar");
    const sideNav = document.getElementById("sideNav");
    if (sideBar && sideNav) {
      sideBar.style.width = "100%";
      sideNav.style.width = "60%";
    }
    setIsNavOpen(true);
  };

  function exitNav() {
    const sideBar = document.getElementById("sideBar");
    const sideNav = document.getElementById("sideNav");
    if (sideBar && sideNav && !isSocialsHovered) {
      sideBar.style.width = "0";
      sideNav.style.width = "0";
    }
    if (!isSocialsHovered) {
      setIsNavOpen(false);
    }
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <main className="flex flex-col h-screen w-screen">
      <Head>
        <title>Basket of Strawberries</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <nav className="bg-red-700 text-2xl text-center w-full text-white flex flex-row items-center h-12 p-2">
        <div onClick={openNav} className="sm:hidden hover:cursor-pointer w-fit flex items-center h-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="18.853" height="12" viewBox="0 0 18.853 12" className="hover:cursor-pointer">
            <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(-4.5 -8)">
              <path id="Path_3" data-name="Path 3" d="M4.5,18H23.353" transform="translate(0 -4)" fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="2"/>
              <path id="Path_4" data-name="Path 4" d="M4.5,9H23.353" transform="translate(0)" fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="2"/>
              <path id="Path_5" data-name="Path 5" d="M4.5,27H23.353" transform="translate(0 -8)" fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="2"/>
            </g>
          </svg>
        </div>

        <div onClick={exitNav} id="sideBar">
          <div id="sideNav" className={`fixed top-0 left-0 bg-slate-300 z-10 overflow-x-hidden duration-200 font-bold flex flex-col justify-center items-center h-full ${isNavOpen ? 'w-60' : 'w-0'}`}>
            <a onClick={exitNav} className="text-black text-3xl absolute top-0 left-0 ml-2 mt-1 hover:cursor-pointer select-none">&times;</a>

            <p className="text-red-700 bg-rose-300 p-4 mb-10 w-full">Basket of Strawberries</p>


            <div className="flex flex-col gap-1">
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'JewelryBox' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('JewelryBox')}>Portfolio</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'Booth Concept' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('Booth Concept')}>Booth Concept</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'About' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('About')}>About</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'News' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('News')}>News</button>
            </div>

            <div onMouseEnter={() => setIsSocialsHovered(true)} onMouseLeave={() => setIsSocialsHovered(false)} className="group flex flex-col mt-12 relative mx-auto h-32 justify-end">
              <a role="link" onClick={() => openInNewTab("https://www.facebook.com/profile.php?id=61557517305356&mibextid=LQQJ4d")}>
                <img src="Icons/Facebook Strawberry.png" className="mx-auto absolute w-1/4 z-0 left-[15%] bottom-0 -rotate-12 group-hover:w-1/3 group-hover:bottom-20 group-hover:left-[10%] duration-200 group-hover:animate-hoverA hover:cursor-pointer"></img>
              </a>
              <a role="link" onClick={() => openInNewTab("https://www.instagram.com/basketofstrawberry/")}>
              <img src="Icons/Instagram Strawberry.png" className="mx-auto absolute w-1/4 z-20 left-[38%] bottom-0 rotate-12 group-hover:w-1/3 group-hover:bottom-20 group-hover:left-[35%] duration-200 group-hover:animate-hoverB hover:cursor-pointer"></img>
              </a>
              <a role="link" onClick={() => openInNewTab("https://www.tiktok.com/@basketofstrawberry")}>
              <img src="Icons/TikTok Strawberry.png" className="mx-auto absolute w-1/4 z-10 left-[58%] bottom-0 -rotate-12 group-hover:w-1/3 group-hover:bottom-20 group-hover:left-[60%] duration-200 group-hover:animate-hoverC hover:cursor-pointer"></img>
              </a>
              <img src="Strawberry Basket.png" className="mx-auto w-10/12 z-40 group-hover:w-1/2 duration-200"></img>
            </div>

          </div>
        </div>

        <p className={`flex-1 ${isNavOpen ? 'text-transparent' : ''}`}>Basket of Strawberries</p>

      </nav>

      <div className="flex flex-col sm:flex-row w-full flex-grow sm:overflow-hidden">
        {/* Profile Bar */}
        <div className="flex flex-col h-full w-full sm:w-1/2 xl:w-1/4 items-center overflow-auto">
          <img src="Profile.jpg" className="rounded-2xl shadow-xl h-60 w-52 my-6 object-cover hover:cursor-help"></img>
          <p className="text-red-700 text-3xl text-center">Jazmin Gong</p>
          <p className="text-black text-2xl text-center">Chicago, IL</p>
          <p className="text-gray-500 text-sm text-center mx-2 my-1">Like a grocery store but Jewelry. Handmade and original designs specializing in necklaces and earrings. :)</p>

        <div className="hidden sm:block">
            <div className="flex flex-col gap-2 my-2">
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'JewelryBox' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('JewelryBox')}>Portfolio</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'Booth Concept' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('Booth Concept')}>Booth Concept</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'About' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('About')}>About</button>
              <button className={`text-red-700 text-2xl text-center ${selectedComponent === 'News' ? 'underline' : ''}`}
  onClick={() => setSelectedComponent('News')}>News</button>
            </div>

            {/*Basket of Strawberries Socials */}
            <div className="group flex flex-col mt-12 relative mx-auto h-32 justify-end">
              <a role="link" onClick={() => openInNewTab("https://www.facebook.com/profile.php?id=61557517305356&mibextid=LQQJ4d")}>
                <img src="Icons/Facebook Strawberry.png" className="mx-auto absolute sm:w-1/5 xl:w-1/4 z-0 sm:left-[22%] xl:left-[15%] bottom-0 -rotate-12 sm:group-hover:w-1/4 xl:group-hover:w-1/3 group-hover:bottom-20 sm:group-hover:left-[18%] xl:group-hover:left-[10%] duration-200 group-hover:animate-hoverA hover:cursor-pointer"></img>
              </a>
              <a role="link" onClick={() => openInNewTab("https://www.instagram.com/basketofstrawberry/")}>
              <img src="Icons/Instagram Strawberry.png" className="mx-auto absolute sm:w-1/5 xl:w-1/4 z-20 sm:left-[40%] xl:left-[38%] bottom-0 rotate-12 sm:group-hover:w-1/4 xl:group-hover:w-1/3 group-hover:bottom-20 sm:group-hover:left-[38%] xl:group-hover:left-[35%] duration-200 group-hover:animate-hoverB hover:cursor-pointer"></img>
              </a>
              <a role="link" onClick={() => openInNewTab("https://www.tiktok.com/@basketofstrawberry")}>
              <img src="Icons/TikTok Strawberry.png" className="mx-auto absolute sm:w-1/5 xl:w-1/4 z-10 sm:left-[57%] xl:left-[58%] bottom-0 -rotate-12 sm:group-hover:w-1/4 xl:group-hover:w-1/3 group-hover:bottom-20 sm:group-hover:left-[58%] xl:group-hover:left-[60%] duration-200 group-hover:animate-hoverC hover:cursor-pointer"></img>
              </a>
              <img src="Strawberry Basket.png" className="mx-auto sm:w-8/12 xl:w-10/12 z-40 sm:group-hover:w-5/12 xl:group-hover:w-1/2 duration-200"></img>
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

