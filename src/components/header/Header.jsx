import styled from "styled-components"
import { useScrollPosStore } from "../../store/scrollPosStore"
import { useEffect } from "react"

const Container = styled.header`
    width: 100%;
    height: 55px;
    background: linear-gradient(#868686, #808080c1);
    position: fixed;
    z-index: 1000;
    li {
      display :inline-block ;
    }
    ul {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 35px;
    }

    @media (max-width: 800px) {
    display: none;
  }
`

const NavLink = styled.div`
    cursor: pointer;
    color: ${(props) => props.isActive? "white" : "#3D3D3D"};
    font-weight: bold;
    &:hover {
        color: white;
    }
    `

const Header = () => {

    const { me, skills, firstYear, secondYear } = useScrollPosStore(state => ({
        me: state.me,
        skills: state.skills,
        firstYear: state.firstYear,
        secondYear: state.secondYear
      }));

      const {setMe, setSkills, setFirstYear, setSecondYear} = useScrollPosStore(state => ({
        setMe: state.setMe,
        setSkills: state.setSkills,
        setFirstYear: state.setFirstYear,
        setSecondYear: state.setSecondYear
      }))

      useEffect(() => {
        const onScroll = () => {
            console.log(window.scrollY)
          // Sett setMe til false hvis brukeren har skrollet ned fra toppen
          if(window.scrollY < 5) {
            setMe(true);
            setSkills(false);
            setFirstYear(false);
            setSecondYear(false);
          } else if(window.scrollY > 5 && window.scrollY < 150) {
            setMe(true);
            setSkills(true);
            setFirstYear(false);
            setSecondYear(false);
          }else if(window.scrollY > 151  && window.scrollY < 550) {
            setMe(true);
            setSkills(true);
            setFirstYear(true);
            setSecondYear(false);
          }else if(window.scrollY > 551) {
            setMe(true);
            setSkills(true);
            setFirstYear(true);
            setSecondYear(true);
          }
        };
    
        // Legg til event listener for scroll-event
        window.addEventListener("scroll", onScroll);
        
        // Fjern event listener når komponenten unmounts
        return () => window.removeEventListener("scroll", onScroll);
      }, [setMe]);

      function scrollToPosition(posY) {
        window.scrollTo({
            top: posY,
            behavior: "smooth"
        })
      }

    return(
        <Container>
            <ul>
                <li>
                    <NavLink isActive={me} onClick={() => scrollToPosition(0)}>
                        Me
                    </NavLink>
                </li>
                <li>
                    <NavLink isActive={skills} onClick={() => scrollToPosition(140)}>
                        Skillset
                    </NavLink>
                </li>
                <li>
                    <NavLink isActive={firstYear} onClick={() => scrollToPosition(300)}>
                        First Year
                    </NavLink>
                </li>
                <li>
                    <NavLink isActive={secondYear} onClick={() => scrollToPosition(1000)}>
                        Second Year
                    </NavLink>
                </li>
            </ul>


        </Container>
    )
}

export default Header