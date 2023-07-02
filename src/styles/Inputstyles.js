import styled from "styled-components";

export const InputLabel = styled.label`
background: #FF416C;  
background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C); 
background: linear-gradient(to right, #FF4B2B, #FF416C); 
color: white;
display: flex;
align-items: center;
justify-content: center;
height: 60px;
width: 18%;
min-width: 120px;
border-radius: 30px;
box-shadow: 2px 2px 8px rgba(0, 0, 0, .8);
`

export const SelectFile = styled.span `
padding-left: 2px;
font-size: large;
`

export const CloudSVG = styled.img`
height: 37px;
padding-right: 2px;


`

export const FileInput = styled.input`
position: absolute;
top: -9999px;
left: -9999px;
`