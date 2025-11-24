import purrWireframeImage from '../assets/UI/purr_wireframe.png'
import atomic_uiImage from '../assets/UI/atomic_ui.png'
import byahezImage from '../assets/UI/byahez.png'
import para_uiImage from '../assets/UI/para_ui.png'
import retailsense_wireframeImage from '../assets/UI/retailsense_wireframe.png'
import Dock from '../components/Dock'

function UIDesigns() {
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
  const designs = [
    {
      id: 1,
      title: 'RetailSense Wireframe',
      description: 'A beautiful UI design showcasing modern design principles and user experience best practices.',
      viewUrl: 'https://www.figma.com/design/1KxY2KV4Fh82jBSxwyLmtD/MODULE-3---UI?node-id=261-817&t=amVrWQzgrhhOSh0o-1',
      imageUrl: retailsense_wireframeImage
    },
    {
      id: 2,
      title: 'PARA UI Design',
      description: 'An innovative interface design focusing on accessibility and intuitive user interactions.',
      viewUrl: 'https://www.figma.com/design/P2lSM8OZz61vgEt0W6xfLQ/PARA?node-id=0-1&t=G4QXeH0xe14LUeeC-1',
      imageUrl: para_uiImage
    },
    {
      id: 3,
      title: 'PURR wireframe & UI',
      description: 'A sleek and minimalist design approach emphasizing clean aesthetics and functionality.',
      viewUrl: 'https://www.figma.com/design/huoqn4TsH2lgRDELY0BN4F/PURR-wireframe---UI?node-id=0-1&t=amVrWQzgrhhOSh0o-1',
      imageUrl: purrWireframeImage
    },
    {
      id: 4,
      title: 'Atomic UI Design',
      description: 'A creative design solution that balances visual appeal with practical usability.',
      viewUrl: 'https://www.figma.com/design/mkMbdfjU64JtDJSlwstGS6/Atomic-Habit-Tracker-draft?t=amVrWQzgrhhOSh0o-1',
      imageUrl: atomic_uiImage
    },
    {
      id: 5,
      title: 'BYAHEZ',
      description: 'A modern and innovative UI design that showcases cutting-edge design trends and user-centered approaches.',
      viewUrl: 'https://www.figma.com/proto/FUNnYXA9jkdUdImrUUwg6x/Byahez-Prototype?t=amVrWQzgrhhOSh0o-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-404&starting-point-node-id=1%3A404&show-proto-sidebar=1',
      imageUrl: byahezImage
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
        UI DESIGNS
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '40px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {designs.map((design) => (
          <div
            key={design.id}
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
            {/* Design Image */}
            <div style={{
              width: '100%',
              height: '300px',
              backgroundColor: '#2a2a2a',
              overflow: 'hidden'
            }}>
              <img
                src={design.imageUrl}
                alt={design.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Design Content */}
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
                {design.title}
              </h2>

              {/* Description */}
              <p style={{
                fontSize: '1rem',
                color: '#d3d3d3',
                lineHeight: '1.6',
                margin: 0
              }}>
                {design.description}
              </p>

              {/* Buttons */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '20px'
              }}>
                <a
                  href={design.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '12px 24px',
                    background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    border: '2px solid #9333ea',
                    textAlign: 'center',
                    width: '100%',
                    display: 'block',
                    transition: 'opacity 0.3s',
                    position: 'relative',
                    boxSizing: 'border-box'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  View Design
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

export default UIDesigns
