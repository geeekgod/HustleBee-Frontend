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
} from "./HomeElements";
import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CustomBtn from "../Main/CustomBtn";

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
                    <CustomBtn>{"Find a Bee"}</CustomBtn>
                    <CustomBtn>{"Need a Job?"}</CustomBtn>
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

export default Home;
