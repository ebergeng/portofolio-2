/* eslint-disable react/prop-types */
import styled from 'styled-components';
import bootstrapPng from '../../assets/bootstrap.png';
import cssPng from '../../assets/css.png';
import jsPng from '../../assets/javascript.png';
import pythonPng from '../../assets/python.png';
import reactPng from '../../assets/react.png';
import htmlPng from '../../assets/html.png';
import styledPng from '../../assets/styled-components.png';
import gitPng from '../../assets/Git-Icon.png';
import gitHubPng from '../../assets/github-mark.png';
import flaskPng from '../../assets/flask.png';




const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  h3 {
    text-align: start;
  }

`

const SkillsContainer = styled.section`
  // your styles here
  width: max-content;
  max-width: 80%;
  display: flex;
  box-shadow: 0px 3px 6px #0000001c;
  padding: 0px 0 10px 35px;
  background-color: #DFDFDF;
  border-radius: 0 0 0 50px;
  transform: ${({ isVisible }) => isVisible ? 'translateX(0)' : 'translateX(65%)'};
  transition: transform 0.5s ease-out;
  &:hover {
    transform: translateX(0);
  }
`;


const Image = styled.img`
    height: 35px;
    max-width: 50px;
`


const TextSection = styled.div`
padding: 5px;
width: auto;
text-align: center;
width: 100%;

div {
    display: flex;
    gap: 15px;
    flex-wrap: wrap-reverse;
   margin: auto;
   justify-content: center;
}

`

const SkillsSection = ({ isVisible }) => {
  return (
    <Container>
            <SkillsContainer isVisible={isVisible}>
      <TextSection>
        <h3>Skillset</h3>
        <div>
        <Image  src={jsPng} alt='javascript'/>
        <Image  src={htmlPng} alt='html'/>
        <Image  src={cssPng} alt='css'/>
        <Image  src={reactPng} alt='react'/>
        <Image  src={bootstrapPng} alt='bootstrap'/>
        <Image  src={styledPng} alt='styled-components'/>
        <Image  src={pythonPng} alt='python'/>
        <Image  src={gitPng} alt='git'/>
        <Image  src={gitHubPng} alt='github'/>
        <Image  src={flaskPng} alt='flask'/>


        </div>

      </TextSection>
    </SkillsContainer>

    </Container>

  );
}

export default SkillsSection;