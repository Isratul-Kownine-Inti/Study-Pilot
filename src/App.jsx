
import './App.css'
import AiDayPlanning from './components/AiDayPlanning/AiDayPlanning'
import Banner from './components/Banner/Banner'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
import HowItWorks from './components/HowItWorks/HowItWorks'
import NavBar from './components/Navbar/NavBar'
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
    </>
  )
}

export default App
