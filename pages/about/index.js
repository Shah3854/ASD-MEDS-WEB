import React from 'react'
import styles from "./about.module.scss";

const AboutPage = ({ isDark, setIsDark, toggleDark }) => {

  return (
    <div className={styles.mainDiv}>
      <div className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.video_bg}>
          <source src="/vid/vid_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={`pageContainer ${styles.dashboardContainer}`}>

        <div className={`${styles.dashboardTextContainer}`}>
          <p className='text-center font-semibold text-lg'>ASDMeds is meticulously curated to illuminate the vast potential of Indian medicinal plants in the treatment of ASD. It delves into their historical use and explores their possibilities as complementary or alternative approaches to conventional treatments.</p>
          <ul>
            <li>
              <div>
                <img src='images/bullet.png' alt="bullet_check_image" />
                Public Data, Empowered Users:
              </div>
              <p>
                Our unwavering commitment lies in providing accurate and in-depth information. We leverage a vast network of publicly available resources and research articles, selecting and presenting data to empower users with comprehensive knowledge.
              </p>
            </li>
            <li>
              <div>
                <img src='images/bullet.png' alt="bullet_check_image" />India's Botanical Bounty:
              </div>
              <p>
                ASDMeds is a comprehensive database showcasing India's diverse botanical resources relevant to autism spectrum disorder (ASD) care. Our repository encompasses over 110 plant species known for their potential in managing ASD symptoms. These plants are classified into two primary categories:
              </p>
              <ol>
                <li>Ayurvedic Plants: Discover the wisdom of ancient Indian medicine.</li>
                <li>Unani Medications: Delve into the legacy of Unani herbal remedies.</li>
              </ol>
            </li>
            <li>
              <div>
                <img src='images/bullet.png' alt="bullet_check_image" />
                Unveiling the Plant's Secrets:
              </div>
              <p>
                Each plant profile in ASDMeds offers a wealth of details, including:
                Active Phytochemicals: Understand the potential powerhouses within the plant.
                Medicinal Plant Parts: Identify the specific portions used for treatment.
                Geographic Distribution: Discover where these plants naturally thrive in India.
                Scientific References: Explore the available research, keeping in mind the information is derived from public sources.
              </p>
            </li>
            <li>
              <div>
                <img src='images/bullet.png' alt="bullet_check_image" />
                A Disclaimer for Transparency:
              </div>
              <p>
                It's crucial to understand that ASDMeds presents information for educational purposes only. The data is solely derived from publicly available sources, and the database publisher holds no responsibility for its accuracy or completeness. Inclusion of a plant does not constitute endorsement of its effectiveness against ASD. Further scientific validation and clinical trials are necessary.
                Join us on this journey of exploration!  Let's unlock the hidden treasures of nature's pharmacy, fostering a future where traditional wisdom and modern science converge to offer new pathways to healing and hope.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutPage