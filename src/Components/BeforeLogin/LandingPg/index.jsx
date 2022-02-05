import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  SubTitle,
  TextWrapper,
  TopLine,
} from "./LandingElements";
import React, { memo } from "react";

import Stack from "@mui/material/Stack";

import CtaButton from "../Main/CtaButtons";

const Home = ({
  matches,
  id,
  imgStart,
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading>{headLine}</Heading>
                <SubTitle>{description}</SubTitle>
                <BtnWrap>
                  <Stack spacing={3} direction="row">
                    <CtaButton>{"Find a Bee"}</CtaButton>

                    <CtaButton primary={true} dark={true} white={false}>
                      {"Need a Job?"}
                    </CtaButton>
                    {/* <Button variant="contained">Text</Button>
                    <Button variant="contained">Contained</Button> */}
                  </Stack>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default memo(Home);
