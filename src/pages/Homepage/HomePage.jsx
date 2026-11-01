
// import '../App.css
import AiDayPlanning from '../../components/AiDayPlanning/AiDayPlanning'
import Banner from '../../components/Banner/Banner'
import FAQ from '../../components/FAQ/FAQ'
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import NextStudySession from '../../components/NextStudySession/NextStudySession'
import Pricing from '../../components/Pricing/Pricing'
import Review from '../../components/Review/Review'
import Stats from '../../components/Stats/Stats'
import StudyingProblem from '../../components/StudyingProblem/StudyingProblem'

function HomePage() {


  return (
    <>
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
    </>
  )
}

export default HomePage
