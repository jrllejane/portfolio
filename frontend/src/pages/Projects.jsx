import retailsenseImage from '../assets/projects/retailsense.png'
import paraImage from '../assets/projects/PARA.png'
import atomicImage from '../assets/projects/atomic.png'
import purrImage from '../assets/projects/purrimage.png'
import Dock from '../components/Dock'

function Projects() {
  const dockItems = [
    { 
      icon: <div style={{ fontSize: '18px', color: '#fff' }}>🏠</div>, 
      label: 'Home', 
      onClick: () => window.location.href = '/' 
    },
    { 
      icon: <div style={{ fontSize: '18px', color: '#fff' }}>👤</div>, 
      label: 'Profile', 
      onClick: () => window.location.href = '/profile' 
    },
    { 
      icon: <div style={{ fontSize: '18px', color: '#fff' }}>📁</div>, 
      label: 'Projects', 
      onClick: () => window.location.href = '/projects' 
    },
    { 
      icon: <div style={{ fontSize: '18px', color: '#fff' }}>🎨</div>, 
      label: 'UI Designs', 
      onClick: () => window.location.href = '/ui-designs' 
    },
  ];
  const projects = [
    {
      id: 1,
      title: 'RetailSense',
      description: 'is an AI-powered foot traffic analysis system that generates heatmaps from recorded surveillance footage to visualize customer movement patterns in retail stores. It helps retailers optimize store layouts and product placements while providing a more affordable alternative to real-time tracking systems.',
      techStack: ['JavaScript', 'Python', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Kato-Neko/RetailSense.git',
      liveUrl: 'retailsense.vercel.app',
      imageUrl: retailsenseImage
    },
    {
      id: 2,
      title: 'PARA',
      description: 'is a web and mobile app designed to make commuting in Cebu easier by helping users navigate jeepney routes and plan their trips efficiently. It provides an intuitive platform for exploring routes, tracking travel history, and making informed commuting choices.',
      techStack: ['JavaScript', 'Java', 'CSS', 'Kotlin', 'HTML'],
      githubUrl: 'https://github.com/kiyoder/IT342-PARA.git',
      liveUrl: '#',
      imageUrl: paraImage
    },
    {
      id: 3,
      title: 'Purr',
      description: 'is a comprehensive pet adoption and community platform designed to connect animal shelters, pet owners, and adopters in one space. It streamlines lost-and-found reporting, adoption management, and volunteer or donation services—making it easier for users to find, help, and care for animals responsibly.',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS', 'JavaScript', 'REST APIs'],
      githubUrl: 'https://github.com/kiyoder/Purr.git',
      liveUrl: '#',
      imageUrl: purrImage
    },
    {
      id: 4,
      title: 'Atomic: Habit Tracker',
      description: 'Atomic is designed to help users build and maintain positive habits by offering a user-friendly platform that simplifies habit tracking and personal growth. ',
      techStack: ['Python', 'HTML/CSS', 'SQLite'],
      githubUrl: 'https://github.com/AmarFloresJr/HabitTracker.git',
      liveUrl: '#',
      imageUrl: atomicImage
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000', 
      color: '#fff',
      padding: '60px 40px'
    }}>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        color: '#d3d3d3',
        marginBottom: '60px',
        textAlign: 'center'
      }}>
        PROJECTS
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundColor: '#1a1a1a',
              background: '#1a1a1a',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a1a2a 50%, #1a1a2a 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1a1a1a';
            }}
          >
            {/* Project Image */}
            <div style={{
              width: '100%',
              height: '300px',
              backgroundColor: '#2a2a2a',
              overflow: 'hidden'
            }}>
              <img
                src={project.imageUrl}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Project Content */}
            <div style={{
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              flex: 1
            }}>
              {/* Title */}
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#fff',
                margin: 0
              }}>
                {project.title}
              </h2>

              {/* Description */}
              <p style={{
                fontSize: '1rem',
                color: '#d3d3d3',
                lineHeight: '1.6',
                margin: 0
              }}>
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '10px'
              }}>
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#2a2a2a',
                      borderRadius: '6px',
                      fontSize: '0.875rem',
                      color: '#fff',
                      border: '1px solid #333'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '20px'
              }}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '12px 24px',
                    backgroundColor: 'transparent',
                    color: '#60a5fa',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    border: '2px solid #60a5fa',
                    textAlign: 'center',
                    width: '100%',
                    display: 'block',
                    transition: 'all 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#60a5fa';
                    e.target.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#60a5fa';
                  }}
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dock Component */}
      <Dock 
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={60}
        distance={150}
        spring={{ mass: 0.1, stiffness: 200, damping: 20 }}
      />
    </div>
  )
}

export default Projects
