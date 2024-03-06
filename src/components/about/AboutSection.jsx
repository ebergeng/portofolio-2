/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import imageSrc from '../../assets/MEG.jpg';


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

`
const AboutContainer = styled.section`
  width: 90%;
  display: flex;
  box-shadow: 0px 3px 6px #0000001c;
  padding: 10px;
  background-color: #DFDFDF;
  border-radius: 0 50px 0 0;
  transform: ${({ isVisible }) => isVisible ? 'translateX(0)' : 'translateX(-50%)'};
  transition: transform 0.5s ease-out;
`;

const ImageContainer = styled.img`
width: 150px;
border-radius: 50%;
`

const TextSection = styled.div`
padding: 5px;

`

const AboutSection = ({ isVisible }) => {
  return (
    <Container>
          <AboutContainer isVisible={isVisible}>
      <ImageContainer src={imageSrc} alt='progile-img'/>
      <TextSection>
        <h2>Hello there!</h2><p>My name is Erlend and im a 35 year old Front-end devoloper </p>
        <p>I'm a front-end student at Noroff School of Technology and Digital Media, set to graduate in Spring 2024. I hold a part-time position as IT manager and teacher in concept development and programming at KVN High School.
        </p>
      </TextSection>
    </AboutContainer>
      
    </Container>

  );
}

export default AboutSection;