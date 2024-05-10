import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { me } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}


const About = () => {
  return (
    <>
    
      <motion.div variants={
      /*textVariant() is a motion.js thing that allows text transitions*/
       textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}> Overview.</h2>
      </motion.div>

      <div className="flex flex-row items-start justify-start">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-xl leading-[30px] mr-20"
        >
          Hi! My name is Stanley, and I am currently a first-year Computer Science student at the University of Waterloo. Driven by an insatiable curiosity and a robust passion for technological innovation, I am dedicated to utilizing my skills to contribute to the exciting advancements in technology. 
          My enthusiasm for learning is at the heart of why I do what I do, and I am looking forward to connecting with fellow visionaries to create transformative solutions that will usher in the next age of digital evolution.
          This portfolio below is a showcase of my skills, work experience, projects, and achievements. 
          <br />
          <br />
          Please feel free to check out my profile and reach out if you want to build something revolutionary together!
        </motion.p>
        <motion.img 
          src={me}
          className = "rounded-full ml-20" 
          variants={fadeIn("up", "", 0.25, 0.75)}
          alt="Stanley's Portrait"
        />
      </div>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
  
      </div> */}
    </>
  )
}

export default SectionWrapper(About, "about");