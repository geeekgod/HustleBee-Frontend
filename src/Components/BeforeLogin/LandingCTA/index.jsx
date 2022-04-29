import { Stack } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";
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
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Link to="/signup">
              <CtaButton primary={true} dark={true} white={true}>
                Hire a Bee
              </CtaButton>
              </Link>
           
              <Small>OR</Small>
              <Link to="/signup">
              <CtaButton white={true}> Apply as a Bee</CtaButton>
              </Link>
            
            </Stack>
          </BtnWrapper>
        </LandingWrapper>
      </LandingContainer>
    </>
  );
};

export default memo(LandingCTA);
