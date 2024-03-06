

import styled from 'styled-components';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import PortofolioSection from './components/portofolio/PortofolioSection';
import Header from './components/header/Header';
import { useScrollPosStore } from './store/scrollPosStore';
import PortofolioSection2 from './components/portofolio/PortofolioSection2';
import Footer from './components/footer/Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px; // Du kan justere dette for å gi mer mellomrom mellom containerne
  padding-top: 80px;
  overflow-x: hidden;
`;


function App() {
  const me = useScrollPosStore(state => state.me);
  const skills = useScrollPosStore(state => state.skills);
  const firstYear = useScrollPosStore(state => state.firstYear);
  const secondYear = useScrollPosStore(state => state.secondYear);

  return (
    <>
    <Header />
    <PageContainer >
      <AboutSection isVisible={me}/>
      <SkillsSection isVisible={skills}/>
      <PortofolioSection  isVisible={firstYear}/>
      <PortofolioSection2 isVisible={secondYear}/>

    </PageContainer>
    <Footer />
    </>

  )
}

export default App
