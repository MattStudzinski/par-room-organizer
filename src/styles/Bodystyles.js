import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
to {
    transform: rotate(360deg);
}
`
export const AnimationContainer = styled.div`
width: 100vw;
height:100vh;
display: flex;
justify-content: center;
`

export const LoadingAnimation = styled.div`
animation: ${rotate} 1.3s ease infinite;
margin-top: 20%;
height: 80px;
width: 80px;
border: 6px solid;
border-color: grey transparent grey transparent;
border-radius: 50%;
`

export const GreenParRoomResultsList = styled.ul `
width: 65%;
max-width: 75%;
padding-left: 0px;
display: flex;
flex-direction: column;
border: solid 1px rgba( 0, 0, 0, .3) ;
box-shadow: 2px 2px 5px rgba (200,200,200, .2);
border-radius: 10px;
`

export const OrangeParRoomResultsList = styled.ul `
width: 65%;
max-width: 75%;
padding-left: 0px;
display: flex;
flex-direction: column;
border: solid 1px rgba( 0, 0, 0, .3) ;
box-shadow: 2px 2px 5px rgba (200,200,200, .2);
border-radius: 10px;
`
export const RedParRoomResultsList = styled.ul `
width: 65%;
max-width: 75%;
padding-left: 0px;
display: flex;
flex-direction: column;
border: solid 1px rgba( 0, 0, 0, .3) ;
box-shadow: 2px 2px 5px rgba (200,200,200, .2);
border-radius: 10px;
`

export const GreenResultsItem = styled.li `
color: green;
margin: 15px;
display: flex;
background-color: rgba(200,200,200, .2);
padding: 10px;
border-radius: 20px;

`
export const OrangeResultsItem = styled.li `
color: orange;
margin: 15px;
display: flex;
background-color: rgba(200,200,200, .2);
padding: 10px;
border-radius: 20px;

`

export const RedResultsItem = styled.li `
color: red;
margin: 15px;
display: flex;
background-color: rgba(200,200,200, .2);
padding: 10px;
border-radius: 20px;
`

export const UploadImageButton = styled.input`
background-color: azure;
color: green;

`

export const GreenTitle = styled.div`
margin-top: 60px;
`

export const OrangeTitle = styled.div`
margin-top: 60px;
`

export const RedTitle = styled.div`
margin-top: 150px;
`