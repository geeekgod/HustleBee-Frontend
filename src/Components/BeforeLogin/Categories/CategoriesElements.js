import styled from "@emotion/styled";


export const Box=styled.div`

display: flex;
background-color:rgba(0,0,0,0.04);
flex-direction:column;
/* justify-content:space-between; */
align-items:center;
@media screen and (max-width:770px) {
   
  }
`;

export const CategoriesWrapper=styled.div`
 max-width:100%;


  `

export const Cards=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-gap:1rem;
@media screen and (max-width:1100px) {
    grid-template-columns:1fr 1fr;
  }
  @media screen and (max-width:700px) {
    grid-template-columns:1fr;
  }`;

export const Card=styled.div`
margin-top: 1rem;
width:300px;
height:350px;
background-color:pink;
display:flex;
justify-content:flex-start;
flex-direction:column;`;

export const Icon=styled.div`
justify-content:flex-start;
`
export const Content=styled.div`
text-align:left;`