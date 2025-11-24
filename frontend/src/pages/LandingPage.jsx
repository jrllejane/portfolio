import Lanyard from '../components/Lanyard'
import './LandingPage.css'
import idImage from '../assets/lanyard/ID Card.png'

function LandingPage() {
  return (
    <div className="landing-page">
      <Lanyard 
        position={[0, 0, 20]} 
        gravity={[0, -40, 0]} 
        cardTexture={idImage}
      />
    </div>
  )
}

export default LandingPage

