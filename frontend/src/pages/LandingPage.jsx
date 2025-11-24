import Lanyard from '../components/Lanyard'
import LiquidEther from '../components/LiquidEther'
import './LandingPage.css'
import idImage from '../assets/lanyard/ID Card.png'

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Background layer - LiquidEther */}
      <div className="liquid-ether-background">
        <LiquidEther />
      </div>
      
      {/* Foreground layer - Lanyard (interactive) */}
      <Lanyard 
        position={[0, 0, 20]} 
        gravity={[0, -40, 0]} 
        cardTexture={idImage}
      />
    </div>
  )
}

export default LandingPage

