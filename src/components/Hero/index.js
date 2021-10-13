import React from "react";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./HeroElements";

const Hero = ({
  id,
  lightBg,
  imgStart,
  lightText,
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  darkText,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <HeroContainer lightBg={lightBg} id={id}>
        <HeroWrapper>
          <HeroRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}> {headLine}</Heading>
                <Subtitle darkText={darkText}> {description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="contacto"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default Hero;
