import React from "react";
import {
  FooterWrap,
  FooterContainer,
  Wrapper,
  SocialLogo,
  SocialMediaWrap,
  WebsiteRights,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <Wrapper>
            <SocialLogo href=''>HustleBee</SocialLogo>
            <FooterLinksContainer>
              <FooterLinksWrapper>
                <FooterLinksItems>
                  <FooterLinkTitle>Categories</FooterLinkTitle>

                  <FooterLink href='#categories'>Full-Time</FooterLink>

                  <FooterLink href='#categories'>Part-Time</FooterLink>

                  <FooterLink href='#categories'>Internship</FooterLink>

                  <FooterLink href='#categories'>Freelance</FooterLink>
                </FooterLinksItems>

                <FooterLinksItems>
                  <FooterLinkTitle>Hire</FooterLinkTitle>
                  <FooterLink href='#signin'>Sign Up as Recuiter</FooterLink>
                  <FooterLink href='#signin'>Hire a Bee</FooterLink>
                </FooterLinksItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
                <FooterLinksItems>
                  <FooterLinkTitle>Apply </FooterLinkTitle>
                  <FooterLink href='#signin'>Sign Up as Bee</FooterLink>
                  <FooterLink href='#signin'>Apply For Jobs</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                  <FooterLinkTitle>About us </FooterLinkTitle>
                  <FooterLink>How it works</FooterLink>

                  <FooterLink>Terms of Services</FooterLink>
                </FooterLinksItems>
              </FooterLinksWrapper>
            </FooterLinksContainer>
          </Wrapper>

          <SocialMedia>
            <SocialMediaWrap>
              <WebsiteRights>
                HustleBee © {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
