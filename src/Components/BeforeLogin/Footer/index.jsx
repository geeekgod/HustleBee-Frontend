import React, { memo } from "react";
import { Link as LinkR } from "react-router-dom";
import { HashLink as LinkH } from "react-router-hash-link";

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
            <SocialLogo>
              <img
                style={{ width: "50%" }}
                src='/static/img/HustleBee_main.png'
                alt='hustlebee'
              />
            </SocialLogo>
            <FooterLinksContainer>
              <FooterLinksWrapper>
                <FooterLinksItems>
                  <FooterLinkTitle>Categories</FooterLinkTitle>

                  <FooterLink>
                    <LinkH to='/#categories'>Full-Time</LinkH>
                  </FooterLink>
                  <FooterLink>
                    <LinkH to='/#categories'>Part-Time</LinkH>
                  </FooterLink>
                  <FooterLink>
                    <LinkH to='/#categories'>Internship</LinkH>
                  </FooterLink>
                  <FooterLink>
                    <LinkH to='/#categories'>Freelance</LinkH>
                  </FooterLink>
                </FooterLinksItems>

                <FooterLinksItems>
                  <FooterLinkTitle>Hire</FooterLinkTitle>

                  <FooterLink>
                    <LinkR to='/signin'>Be a Recuiter</LinkR>
                  </FooterLink>
                  <FooterLink>
                    <LinkR to='/signin'>Hire a Bee</LinkR>
                  </FooterLink>
                  <FooterLink>
                    <LinkR to='/signin'>Find Talent</LinkR>
                  </FooterLink>
                </FooterLinksItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
                <FooterLinksItems>
                  <FooterLinkTitle>Apply </FooterLinkTitle>
                  <FooterLink>
                    <LinkR to='/signin'>Be a Bee</LinkR>
                  </FooterLink>
                  <FooterLink>
                    <LinkR to='/signin'>Apply For Jobs</LinkR>
                  </FooterLink>

                  <FooterLink>
                    <LinkR to='/signin'>Find Work</LinkR>
                  </FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                  <FooterLinkTitle>About HustleBee </FooterLinkTitle>
                  <FooterLink>About us</FooterLink>
                  <FooterLink>
                    <LinkR to='/contactus'>Contact us</LinkR>
                  </FooterLink>
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

export default memo(Footer);
