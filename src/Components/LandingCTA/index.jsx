import { Stack } from "@mui/material";
import React from "react";
import CtaButton from "../BeforeLogin/Main/CtaButtons";

import {
  LandingContainer,
  LandingWrapper,
  Heading,Small,
  BtnWrapper,
} from "./LandingCTAElements";

const LandingCTA = () => {
  return (
    <>
      <LandingContainer>
        <LandingWrapper>
          <Heading>
            Join HustleBee to unleash the world’s untapped human potential
          </Heading>
          <BtnWrapper>
          <Stack spacing={3} direction="row"> 
            <CtaButton primary={true} dark={true} white={true}>
           Hire a Bee
            </CtaButton>
            
            <Small> Or</Small>
            <CtaButton white={true}> Apply as a Bee</CtaButton>
            </Stack>
          </BtnWrapper>
        </LandingWrapper>
      </LandingContainer>
    </>
  );
};

export default LandingCTA;
