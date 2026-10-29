
import './App.css'
import AiDayPlanning from './components/AiDayPlanning/AiDayPlanning'
import Banner from './components/Banner/Banner'
import FAQ from './components/FAQ/FAQ'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
import Footer from './components/Footer/Footer'
import HowItWorks from './components/HowItWorks/HowItWorks'
import NavBar from './components/Navbar/NavBar'
import NextStudySession from './components/NextStudySession/NextStudySession'
import Pricing from './components/Pricing/Pricing'
import Review from './components/Review/Review'
import Stats from './components/Stats/Stats'
import StudyingProblem from './components/StudyingProblem/StudyingProblem'

function App() {


  return (
    <>
 <NavBar></NavBar>
 <Banner></Banner>
 <Stats></Stats>
 <StudyingProblem></StudyingProblem>
 <FeaturedSection></FeaturedSection>
 <HowItWorks></HowItWorks>
 <AiDayPlanning></AiDayPlanning>
 <Review></Review>
 <Pricing></Pricing>
 <FAQ></FAQ>
 <NextStudySession></NextStudySession>
 <Footer></Footer>
    </>
  )
}

export default App
