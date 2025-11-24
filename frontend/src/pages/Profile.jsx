import profileBg from '../assets/profilebg.png'
import SpotlightCard from '../components/SpotlightCard'
import TextPressure from '../components/TextPressure'
import ScrollFloat from '../components/ScrollFloat'
import LogoLoop from '../components/LogoLoop'
import Dock from '../components/Dock'

function Profile() {
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

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000', 
      color: '#fff',
      position: 'relative'
    }}>
      {/* Section 1: Header/Introduction */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        padding: '20px',
        backgroundImage: `url(${profileBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <a
          href="https://drive.google.com/file/d/1d_QpgVG7DwxeOwjLvnbGNjNU5-Lu6zqI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            padding: '16px 36px',
            background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '1.1rem',
            letterSpacing: '0.5px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 8px 20px rgba(147, 51, 234, 0.4), 0 4px 8px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-4px) scale(1.05)';
            e.target.style.boxShadow = '0 12px 28px rgba(147, 51, 234, 0.5), 0 6px 12px rgba(0, 0, 0, 0.3)';
            e.target.style.background = 'linear-gradient(135deg, #a855f7 0%, #f472b6 100%)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 20px rgba(147, 51, 234, 0.4), 0 4px 8px rgba(0, 0, 0, 0.2)';
            e.target.style.background = 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Resume
        </a>
      </section>

      {/* Section 2: About Me */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px',
        position: 'relative'
      }}>
        {/* TextPressure at top */}
        <div style={{ 
          height: '150px', 
          width: '100%',
          marginBottom: '0'
        }}>
          <TextPressure
            text="About Me"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ff66c4"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        {/* SpotlightCard at bottom */}
        <SpotlightCard 
          className="custom-spotlight-card" 
          spotlightColor="rgba(255, 102, 196, 0.2)"
          style={{ 
            width: '70%', 
            maxWidth: '800px', 
            minHeight: '400px',
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: 'auto'
          }}
        >
          <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
            Hi, I'm Jai, an IT student from CIT-U who enjoys building things that are clean, organized, and genuinely useful. I like creating systems that make work easier to understand and easier to manage. Whether I am designing a UI, fixing a frustrating bug, or setting up the flow of a project, I always try to keep things clear and well-structured. I am naturally detail-oriented and creative, and I use both to make my projects simple, intuitive, and enjoyable to use.
          </p>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.6' }}>
            Outside of school, I like keeping things light and fun. I enjoy memes, TikTok trends, and I often cook or bake from scratch, including homemade flour tortillas, cheesecake, milky cheese buns and drink matcha lattes. I also enjoy reading books and watching movies or running whenever I want to unwind. I try to learn something new whenever I can, and I am currently working on becoming more confident and decisive in my choices and goals.
          </p>
        </SpotlightCard>
      </section>

      {/* Section 3: Skills */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px',
        position: 'relative'
      }}>
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          textClassName="skills-text"
          textStyle={{ color: '#ff66c4' }}
        >
          SKILLS
        </ScrollFloat>
        <p style={{ 
          maxWidth: '800px', 
          width: '100%', 
          margin: '0 auto',
          padding: '0 20px',
          lineHeight: '1.6',
          fontSize: '1.2rem'
        }}>I have experience with programming languages including Java, JavaScript, 
            Python, C, HTML, and CSS. I have experience with frameworks and tools such as React, 
            Flask, Supabase, Vercel, Railway, and ServiceNow. I also have experience with UI/UX 
            and design tools like Figma and Canva to create intuitive and visually appealing interfaces.</p>
        <div style={{ 
          width: '100%', 
          position: 'absolute',
          bottom: '20%',
          left: '0',
          right: '0'
        }}>
          <LogoLoop
            logos={[
              { node: <span>Java</span>, title: "Java" },
              { node: <span>JavaScript</span>, title: "JavaScript" },
              { node: <span>Python</span>, title: "Python" },
              { node: <span>C</span>, title: "C" },
              { node: <span>HTML</span>, title: "HTML" },
              { node: <span>CSS</span>, title: "CSS" },
              { node: <span>React</span>, title: "React" },
              { node: <span>Flask</span>, title: "Flask" },
              { node: <span>Supabase</span>, title: "Supabase" },
              { node: <span>Vercel</span>, title: "Vercel" },
              { node: <span>Railway</span>, title: "Railway" },
              { node: <span>ServiceNow</span>, title: "ServiceNow" },
              { node: <span>Figma</span>, title: "Figma" },
              { node: <span>Canva</span>, title: "Canva" }
            ]}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technologies and tools"
          />
        </div>
      </section>

      {/* Footer: Contact Me */}
      <footer style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 20px 60px',
        backgroundColor: '#000000',
        color: '#ffffff',
        width: '100%'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          fontFamily: 'serif',
          marginBottom: '120px',
          textAlign: 'center'
        }}>Contact Me</h2>
    
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '40px',
          width: '100%',
          maxWidth: '1400px',
          flexWrap: 'wrap'
        }}>
          {/* Address Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            flex: '1',
            minWidth: '250px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '10px',
              fontFamily: 'sans-serif'
            }}>ADDRESS</h3>
            <p style={{
              fontSize: '1rem',
              color: '#ffffff',
              fontFamily: 'sans-serif'
            }}>San Fernando, Cebu</p>
          </div>

          {/* Phone Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            flex: '1',
            minWidth: '250px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '10px',
              fontFamily: 'sans-serif'
            }}>PHONE</h3>
            <p style={{
              fontSize: '1rem',
              color: '#ffffff',
              fontFamily: 'sans-serif'
            }}>09292263711</p>
          </div>

          {/* Email Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            flex: '1',
            minWidth: '250px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '10px',
              fontFamily: 'sans-serif'
            }}>EMAIL</h3>
            <p style={{
              fontSize: '1rem',
              color: '#ffffff',
              fontFamily: 'sans-serif'
            }}>jrllejane@gmail.com</p>
          </div>

          {/* LinkedIn Section */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            flex: '1',
            minWidth: '250px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '10px',
              fontFamily: 'sans-serif'
            }}>LINKEDIN</h3>
            <p style={{
              fontSize: '1rem',
              color: '#ffffff',
              fontFamily: 'sans-serif'
            }}>linkedin.com/in/jierelle</p>
          </div>
        </div>
      </footer>
      
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

export default Profile

