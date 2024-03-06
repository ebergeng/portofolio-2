import styled from 'styled-components';
import CarouselModal from '../modal/CaruselModal.jsx';
import { useState } from 'react';
import { projectExamImages } from '../../assets/project-exam/projectExamImg.js';
import { jsFrameworkImages } from '../../assets/js-frameworks/jsFrameworkImg.js';
import { semesterProjectImages } from '../../assets/semester-project/semesterProjectImg.js';


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

`

const PortofolioContainer = styled.section`
  // your styles here
  width: 80%;
  display: flex;
  justify-content: end;
  box-shadow: 0px 3px 6px #0000001c;
  padding: 0px 0px 25px 50px;
  background-color: #DFDFDF;
  border-radius: 0 0 0 50px;
  transform: ${({ isVisible }) => isVisible ? 'translateX(0)' : 'translateX(65%)'};
  transition: transform 0.5s ease-out;

  h2{
    text-align: start;
  }
`;


const Image = styled.img`
    width: 300px;
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
    justify-content: end;  

`


const SectionOne = styled.div`
    border-radius: 50px 0 0 0;
    padding: 10px;
    width: 100%;
    background-color: white;
    box-shadow: 0px 3px 6px #0000001c;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    div{
        text-align: center;
        padding: 10px;
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
    border-radius: 0 0 0 50px;
`

const Links = styled.div`
    width: 100%;
    display: flex;
    gap: 25px;
    justify-content: center;
`




const PortofolioSection2 = ({isVisible}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [lib, setLib] = useState([])

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    function handleOpen(type) {
        console.log("heyt")
        if(type === "exam") {
            setLib(projectExamImages)
            
        }else if(type === "framWork") {
            setLib(jsFrameworkImages)
        }else if(type === "semester") {
            setLib(semesterProjectImages)
        }


        openModal()

    }

  return (
    <Container>
        <PortofolioContainer isVisible={isVisible}>
        <TextSection>
            <h2>Portofolio Second Year</h2>
            <Wrapper>
                <SectionContainerOne>
                <SectionOne>
                    <Image src={semesterProjectImages[4]} onClick={() => handleOpen("semester")}/>
                    <div>
                        <h3>Semester Project 2 - Auction House</h3>
                            <p>
                            This project is an auction house platform that allows users to bid on items, view bid history, and manage their personal profiles. The frontend is styled using Bootstrap and SCSS, while the backend logic is handled with vanilla JavaScript.
                            </p>   
                            <Links>
                            <p>Link to: <a href="https://github.com/ebergeng/Semester-Project-2_auctionHouse">GitHub Repo</a></p>
                            <p>Link to: <a href="https://vocal-griffin-69aab1.netlify.app/">Site</a></p>
                        </Links>               
                    </div>
              
                </SectionOne>
                </SectionContainerOne>

                <SectionContainerOne>
                <SectionTwo>
                    <Image src={jsFrameworkImages[0]} onClick={() => handleOpen("framWork")}/>
                    <div>
                        <h3>JavaScript Frameworks Course Assignment</h3>
                            <p>
                            This project is a React-based e-commerce store that allows users to browse products, add them to their cart, and checkout. The application uses React Router for routing and Zustand for state management. The styling is accomplished with styled-components, providing a responsive and modern user interface.
                            </p>
                        <Links>
                            <p>Link to: <a href="https://github.com/ebergeng/JS-Frameworks_CA">GitHub Repo</a></p>
                            <p>Link to: <a href="https://js-frameworks-ca-eb.netlify.app/">Site</a></p>
                        </Links>

                    </div>
              
              
                </SectionTwo>
                </SectionContainerOne>

                <SectionContainerOne>
                <SectionThree>
                    <Image src={projectExamImages[0]} onClick={() => handleOpen("exam")}/>
                    <div>
                        <h3>Project Exam - 2</h3>
                         <p>This is my project Exam and it is a React-based web application designed to showcase a modern, scalable, and responsive UI/UX design. Utilizing a comprehensive stack including React 18, Styled Components, React Hook Form, Zustand for state management, and Vite as the build tool, this project aims to deliver a seamless and efficient user experience.</p>                       
                         <Links>
                            <p>Link to: <a href="https://github.com/ebergeng/Project-Exam">GitHub Repo</a></p>
                            <p>Link to: <a href="https://dainty-biscotti-9278ea.netlify.app/">Site</a></p>
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

export default PortofolioSection2;