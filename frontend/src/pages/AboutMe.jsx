import './AboutMe.css'
import computerBg from '../assets/computerbg.png'
import Folder from '../components/Folder'
import DecryptedText from '../components/DecryptedText'

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
      <div className="decrypted-text-container">
        <DecryptedText 
          text="Welcome to My Portfolio" 
          speed={100}
          maxIterations={20}
          animateOn="view"
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

