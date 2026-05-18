import React from 'react'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, GradientName, Tagline, Span, SubTitle, ResumeButton } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import myphoto from '../../Image/AI2.png'
import HeroBgAnimation from '../../HeroBgAnimation'
import { motion } from 'framer-motion';

import { Bio } from '../../data/constants';


const Hero = () => {
  return (
    <div id="about">
            <HeroContainer>
                <HeroBg>
                <HeroBgAnimation />

                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left" as={motion.div}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Title>Hi, I am <br /> <GradientName>{Bio.name}</GradientName></Title>
                        <Tagline>Building digital experiences that matter</Tagline>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right" as={motion.div}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                    <Img src={myphoto} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>

  )
}

export default Hero