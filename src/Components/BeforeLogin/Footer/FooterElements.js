import styled from "@emotion/styled";


export const FooterContainer=styled.footer`
padding-top:1rem;
background-color:rgba(0, 0, 0, 0.03);`;

export const FooterWrap=styled.div`
padding:10px 10px 10px 10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
max-width:1100px;
margin:0 auto;`;

export const FooterLinksContainer=styled.div`
display:flex;
justify-content: center;
@media screen and (max-width:820px) {
    padding-top:32px;
    
}`;
export const FooterLinksWrapper=styled.div`
display:flex;
@media screen and (max-width:820px) {
    flex-direction: column;
}`;
export const Wrapper=styled.div`
display:flex;
width:100%;
justify-content:space-around;
@media screen and (max-width:600px) {
flex-direction: column;

}`

export const  FooterLinksItems=styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
/* margin:px; */
text-align:left;
width:160px;
box-sizing:border-box;
color:#fff;
@media screen and (max-width:420px) {
    margin: 0;
    padding:10px;
    width:100%;
}`;

export const FooterLinkTitle=styled.h1`
font-size:14px;
margin-bottom:16px;

color:#101522;
`;
export const FooterLink=styled.a`
color:#101522;
text-decoration:none;
margin-bottom:0.5rem;
font-size:14px;
margin-bottom:1rem;

&:hover{
    color:#101522;
    transition:0.3s ease-out;
}`;

export const SocialMedia = styled.section`

width:100%;`;

export const SocialMediaWrap=styled.div`
display:flex;
justify-content:center;
align-items:center;

margin-top:1rem;
/* margin:40px auto 0 auto; */
@media screen and (max-width:820px) {
    flex-direction:column;
}`;

export const SocialLogo= styled.a`
color:#101522;
justify-self:start;
cursor: pointer;
text-decoration:none;
justify-content:center;
margin-top: 20px;
margin-bottom: auto;
font-size:2rem;
display:flex;
align-items:center;

font-weight:bold;`

export const WebsiteRights = styled.small`
color:#101522;
margin-bottom:16px;
align-items:center;
justify-content:center;`;


