import styled, { css } from 'styled-components';


function App() {
  return (
    <Wrapper>
      <Card> 
        <Picture src="desert.jfif"/>
        <Title>Headline</Title>
        <Text>Faucibus. Faucibus. Sit sit sapien sit <br />tempusrisu ut. Sit molestie ornare in venen.</Text>
        <StyledBtn main>See more</StyledBtn>
        <StyledBtn>Save</StyledBtn>
      </Card>
    </Wrapper>
  );
}

type StyledBtnPropsType = {
  main?: boolean,
}

const StyledBtn = styled.button<StyledBtnPropsType>`
box-sizing: border-box;
width: 86px;
height: 30px;
border-radius: 5px;
background-color: transparent;
font-family: Inter;
font-size: 10px;
font-weight: 700;
line-height: 20px;
border: 2px solid #4E71FE;
color: #4E71FE;
margin-top: 19px;
margin-left: 10px;

&:hover {
  cursor: pointer;
}

${props => props.main && css<StyledBtnPropsType>`
background-color: #4E71FE;
color: #fff;
`}
`;

const Text = styled.p`
font-family: Inter;
font-size: 12px;
font-weight: 500;
line-height: 20px;
text-align: left;
color: #ABB3BA;
margin-top: 20px;
margin-left: 10px;
margin-right: 20px;
margin-bottom: 0px;
`;

const Title = styled.h1`
font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 19.36px;
text-align: left;
margin-top: 20px;
margin-left: 10px;
`;

const Card = styled.div`
box-sizing: border-box;
padding: 10px;
width: 300px;
height: 350px;
background-color: #fff;
border-radius: 15px;
`;

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: #e6b0b6;
display: flex;
justify-content: center;
align-items: center;
`;

const Picture = styled.img`
width: 280px;
height: 170px;
border-radius: 10px;
display: block;
`;

export default App;
