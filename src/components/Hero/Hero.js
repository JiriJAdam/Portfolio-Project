import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I'm Jiri, <br />
          Fullstack Developer.
        </SectionTitle>
        <SectionText>
        “If you really want to hear about it, the first thing you’ll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied before they had me, and all that David Copperfield kind of , but I don’t feel like going into it, if you want to know the truth.” 
        </SectionText>
        <Button onClick={() => window.location = 'https://jiriadam.com/#about'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;