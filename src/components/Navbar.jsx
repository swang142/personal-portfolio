import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close, linkedin, github} from '../assets';

const Navbar = () => {
const [active, setActive] = useState("");
const [toggle, setToggle] = useState(true);


  return (
    <nav
    className={
      '${styles.paddingX}: w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}>
        <div className = "w-full flex justify-between item-center max-w-7xl mx-auto">

          {/* if we click logo/name we scroll to (0,0) and our current 'active' tab is nothing */}
          <Link to="/" className = "flex items-center gap-2" onClick = {() => {
            setActive("");
            window.scrollTo(0,0);
          }}>
            <img src = {logo} alt = "logo" className = "w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex"> Stanley Wang &nbsp;

            {/* When used together, sm:block hidden means the element will be hidden by default, but once the screen size reaches the sm breakpoint 
            (implying larger than mobile), the block class will take effect, and the element will be displayed as a block-level element.*/}
            <span className= "hidden sm:block "> | Software Developer</span></p>
          </Link>
          
          {/* hidden by default, but becomes a flex container once the screen size reaches sm breakpoint. */}
          <ul className= "list-none hidden sm:flex flex-row gap-10">
            <li className =  "text-secondary text-[18px] font-medium">
              <a target="_blank" href="https://www.linkedin.com/in/stanley-wang-aa0876288/"> <img src={linkedin} width= "25"/> </a>
            </li>
            <li className =  "text-secondary text-[18px] font-medium">
              <a target="_blank" href="https://github.com"> <img src={github} width= "25"/> </a>
            </li>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          </ul>
            
            {/* flex container by default, but becomes hidden once screen size reaches sm breakpoint */}
            <div className='flex sm:hidden flex-1 justify-end items-center'>
                <img
                  src={
                    /* toggles between open and close menu icon */
                    toggle ? close : menu
                  }
                  alt='menu'
                  className='w-[28px] h-[28px] object-contain'
                  onClick={() => setToggle(!toggle)}
                />
                <div
                  className={`${
                    /* depending on whether or menu is opened or closed, display or do not display the menu */
                    !toggle ? "hidden" : "flex"
                  } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                >
                  <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                    {navLinks.map((nav) => (
                      <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px] ${
                          /* if we are on our current 'tab', make the header text whiter */
                          active === nav.title ? "text-white" : "text-secondary"
                        }`}
                        onClick={() => {
                          /* close menu and change our active tab */
                          setToggle(!toggle);
                          setActive(nav.title);
                        }}
                      >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> 
        </div>
    </nav>
  )
}

export default Navbar