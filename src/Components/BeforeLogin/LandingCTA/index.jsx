import { Stack } from "@mui/material";
import React from "react";
import CtaButton from "../Main/CtaButtons";

import {
  LandingContainer,
  LandingWrapper,
  Heading,
  Small,
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
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
            >
              <CtaButton primary={true} dark={true} white={true}>
                Hire a Bee
              </CtaButton>
              < Small>OR</ Small>
              <CtaButton white={true}> Apply as a Bee</CtaButton>
            </Stack>
          </BtnWrapper>
        </LandingWrapper>
      </LandingContainer>
    </>
  );
};

export default LandingCTA;
