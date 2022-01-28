import styled from "@emotion/styled";

export const InfoContainer=styled.div`
color:#fff;
background:'#f9f9f9';
@media screen  and (max-width:768px){
    padding: 100px 0;
}
`
export const InfoWrapper=styled.div`
display:grid;
z-index:97;
width:100%;
height:650px;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 24px;
justify-content:center;
`
 export const InfoRow = styled.div`
 display:grid;
 grid-auto-columns:minmax(auto,1fr);
 align-items:center;
 grid-template-areas:${({imgStart})=>(imgStart ? `'col2 col1'` : `'col1 col2'`)};
 
 @media screen  and (max-width:768px){
    grid-template-areas:${({imgStart})=>(imgStart ? `'col1''col2'` : `'col1 col1' 'col2 col2'`)};   
     
 }`;
 export const Column1 =styled.div`
 margin-bottom:15px;
 padding:0 15px;
 grid-area:col1;`;

  export const Column2 =styled.div`
  margin-bottom:15px;
  padding:0 15px;
  grid-area:col2;`;
  
  export const TextWrapper= styled.div`
  max-width:540px;
  padding-top:0;
  padding-bottom:60px;`;

  export const TopLine = styled.p`
  color:#01bf71;
  font-size:16px;
  text-align:left;
  margin-top:2rem;
  line-height:10px;
  font-weight:700;
  letter-spacing:1.4px;
  text-transform:uppercase;
 `;

   export  const Heading=styled.h1`
   margin-bottom:24px;
   font-size:48px;
   line-height:1.1;
   text-align:left;
   font-weight: 600;
   color:#010606; // '#010606'
   @media screen and (max-width:480px) {
    font-size: 32px;}`;

export const SubTiltle = styled.p`
max-width:440px;
margin-bottom:35px;
text-align:left;
font-size:18px;
line-height:24px;
color:#010606 ;`;

export const BtnWrap= styled.div`
display:flex;
justify-content:flex-start;`;

export const ImgWrap= styled.div`
max-width:555px;
height:100%;`;

 export const Img=styled.img`
 width:100%;
 margin:0 0 10px 0;
 padding-right:0;`;
