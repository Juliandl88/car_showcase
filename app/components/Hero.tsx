"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {
    
  }
  
  return (
    <div className='Hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, book, or rent a car - Quickly
          and easily!
        </h1>
        <p className='hero__subtitle'>
          Streamline you car rental experience with our effortless 
          booking process.
        </p>
        <CustomButton 
          title= 'Explore Cars'
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
          />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src={}
        </div>
      </div>
    </div>
  )
}

export default Hero