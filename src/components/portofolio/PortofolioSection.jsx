/* eslint-disable react/prop-types */
import styled from 'styled-components';
import CarouselModal from '../modal/CaruselModal';
import { useState } from 'react';
import { peOneImage } from '../../assets/project-exam-first/peOneImg.js';
import { htmlCssImages } from '../../assets/html_css/htmlCssImg.js';
import { spOneImages } from '../../assets/semester-project-first/spOneImg.js';


const Container = styled.div`
  width: 100%;

`

const PortofolioContainer = styled.section`
  // your styles here
  width: 80%;
  display: flex;
  box-shadow: 0px 3px 6px #0000001c;
  padding: 0 50px 25px 0;
  background-color: #DFDFDF;
  border-radius: 0 50px 0 0;
  transform: ${({ isVisible }) => isVisible ? 'translateX(0)' : 'translateX(-65%)'};
  transition: transform 0.5s ease-out;
  z-index: -99;
  h2 {
    text-align: end;
  }

  &:hover {
    transform: translateX(0);
  }
`;


const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: start;
    max-width: 300px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-height: 180px;
    cursor: pointer;
`


const TextSection = styled.div`
text-align: center;
padding: 5px;
width: 100%;

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

`

const Section = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    gap: 25px;
`
const SectionContainerOne = styled(Section)`
    justify-content: start;
    

`


const SectionOne = styled.div`
    border-radius: 0px 50px 0 0;
    padding: 10px;
    width: 100%;
    background-color: white;
    box-shadow: 0px 3px 6px #0000001c;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        text-align: left;
        padding: 10px;
        width: 100%;
    }
    @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 35px;
    overflow: hidden;
  }

`

const SectionTwo = styled(SectionOne)`
    border-radius: 0;
`

const SectionThree = styled(SectionOne)`
    border-radius: 0 0 50px 0;
`

const Links = styled.div`
    width: 100%;
    display: flex;
    gap: 25px;
    justify-content: center;
`



const PortofolioSection = ({isVisible}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lib, setLib] = useState([])

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    function handleOpen(type) {
        if(type === "exam") {
            setLib(peOneImage)   
        }else if(type === "framWork") {
            setLib(spOneImages)
        }else if(type === "semester") {
            setLib(htmlCssImages)
        }
        openModal()
    }

  return (
    <Container>
        <PortofolioContainer isVisible={isVisible}>
        <TextSection>
            <h2>Portofolio First Year</h2>
            <Wrapper>
                <SectionContainerOne>
                    <SectionOne>
                        <ImageContainer>
                            <Image src={htmlCssImages[0]} onClick={() => handleOpen("semester")}/>
                        </ImageContainer>
                        
                        <div>
                            <h3>HTML & CSS Ca</h3>
                                <p>
                                    My first webpage built with only html, css and js.
                                </p>
                                <Links>
                                <p>Link to: <a href="https://github.com/ebergeng/RainyDays">GitHub Repo</a></p>
                                <p>Link to: <a href="https://velvety-blini-002fa1.netlify.app/contact">Site</a></p>
                                </Links>              
                        </div>
                
                    </SectionOne>
                </SectionContainerOne>

                <SectionContainerOne>
                <SectionTwo>
                    <ImageContainer>
                    <Image src={spOneImages[0]} onClick={() => handleOpen("framWork")}/>
                    </ImageContainer>
                    
                    <div>
                        <h3>Semester Project - 1</h3>
                            <p>
                            The page had to cater to a very broad target audience, so I have tried to make the page simple and playful for everyone, from young teenagers to the elderly.
                            This page is build with only HTML and CSS
                            </p>
                            <Links>
                            <p>Link to: <a href="https://github.com/ebergeng/semester_project_v2">GitHub Repo</a></p>
                            <p>Link to: <a href="https://resplendent-semifreddo-f584b3.netlify.app/">Site</a></p>
                            </Links>       
                    </div>
              
                </SectionTwo>
                </SectionContainerOne>

                <SectionContainerOne>
                <SectionThree>
                    <ImageContainer>
                        <Image src={peOneImage[0]} onClick={() => handleOpen("exam")}/>
                    </ImageContainer>
                    
                    <div>
                        <h3>Project Exam - 1</h3>
                         <p>A blogpage built with HTML, CSS, JS and uses wordpress as a headless CMS. It uses a wordpress api call to catch posts from a wordpress DB. All the posts in this sites are createt and stored on a wordpress page.</p>
                         <Links>
                            <p>Link to: <a href="https://github.com/Noroff-FEU-Assignments/project-exam-1-ebergeng">GitHub Repo</a></p>
                            <p>Link to: <a href="https://poetic-dragon-ccb4f9.netlify.app/">Site</a></p>
                        </Links>       
                    </div>
              
                </SectionThree>
                </SectionContainerOne>
            
            </Wrapper>

        </TextSection>
        </PortofolioContainer>
        <CarouselModal images={lib} isOpen={isModalOpen} onClose={closeModal}></CarouselModal>
    </Container>


  );
}

export default PortofolioSection;