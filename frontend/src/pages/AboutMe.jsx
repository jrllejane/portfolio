import './AboutMe.css'
import computerBg from '../assets/computerbg.png'
import Folder from '../components/Folder'
import DecryptedText from '../components/DecryptedText'
import Lanyard from '../components/Lanyard'
import idImage from '../assets/lanyard/ID Card.png'

function AboutMe() {
  const folderItems = [
    {
      title: 'PROFILE',
      route: '/profile'
    },
    {
      title: 'PROJECTS',
      route: '/projects'
    },
    {
      title: 'UI DESIGNS',
      route: '/ui-designs'
    }
  ];

  return (
    <div className="about-me" style={{ backgroundImage: `url(${computerBg})` }}>
      {/* Lanyard Component */}
      <Lanyard 
        position={[0, 0, 20]} 
        gravity={[0, -40, 0]} 
        cardTexture={idImage}
        initialXOffset={5}
      />
      
      <div className="decrypted-text-container">
        <DecryptedText 
          text="Welcome to My Portfolio" 
          speed={100}
          maxIterations={20}
          sequential={true}
          animateOn="both"
          revealDirection="center"
          className="decrypted-text"
          parentClassName="decrypted-text-parent"
        />
      </div>
      <div className="folder-container">
        <Folder size={1.4} color="#ff66c4" className="custom-folder" items={folderItems} title="Click me" />
      </div>
    </div>
  )
}

export default AboutMe

