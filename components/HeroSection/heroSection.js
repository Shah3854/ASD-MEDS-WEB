'use client'
import { useRouter } from "next/router";
import styles from "./heroSection.module.scss";
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { Navbar, UncontrolledCarousel } from "reactstrap"
import Type from "../TypeWriter";

const HeroSection = () => {
  const router = useRouter();
  
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={styles.carouselcontainer}>
          {/* <UncontrolledCarousel
            fade={true}
            interval={3000}
            dark={true}
            className={`max-w-screen`}
            items={[
              {
                altText: 'Slide 1',
                key: 1,
                src: '/images/sliderImages/slide1.jpg'
              },
              {
                altText: 'Slide 2',
                key: 2,
                src: '/images/sliderImages/slide2.jpg'
              },
              {
                altText: 'Slide 3',
                key: 3,
                src: '/images/sliderImages/slide3.jpg'
              },
              {
                altText: 'Slide 4',
                key: 1,
                src: '/images/sliderImages/slide4.jpg'
              },
              {
                altText: 'Slide 5',
                key: 2,
                src: '/images/sliderImages/slide5.jpg'
              },
              {
                altText: 'Slide 6',
                key: 3,
                src: '/images/sliderImages/slide6.jpg'
              }
            ]}
          /> */}
          <video autoPlay loop muted className={styles.video_bg}>
            <source src="/vid/vid_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      <div className={`pageContainer ${styles.container}`}>
        <div className={`${styles.heroContentText}`}>
            <div className={`${styles.title}`}>ASD MEDS</div>
            <div className={`${styles.subTitle}`}>Medicinal Plant Database<Type /></div>
            <div className={`${styles.subTitle}`}>ASD MEDS epitomizes elegance in its quest to unlock the healing potential of Indian medicinal plants for Autism Spectrum Disorder (ASD). Our refined platform seamlessly integrates ancient wisdom with modern research, offering a meticulously curated repository of botanical knowledge.</div>
            <div className={`${styles.subsubTitle}`}>Discover a wealth of information on medicinal properties, preferred plant parts for treatment, and natural habitats. This sophisticated resource caters not only to medical professionals and researchers but also extends its embrace to caregivers and parents seeking alternative therapies for ASD<br/></div>
        </div>
        <div className={`${styles.heroContentCta}`}>
            <div className={`${styles.button}`}>
                <button className="button button-primary" onClick={() => router.push("/dashboard")}>Explore!</button>
            </div>
            <div className={`${styles.ctaText}`}>
            By harmonizing traditional practices with contemporary insights, ASD Remedies transcends mere information sharing, fostering transformative healing journeys. Each visit to our distinguished platform symbolizes a step toward unraveling nature's enigmatic healing prowess and nurturing hope for those affected by ASD.
            </div>
        </div>
        
      </div>  
      
    </div>
  )
}

export default HeroSection