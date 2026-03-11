import React from 'react'

function Footer() {
  return (
    <div>
      <footer style={{
       position: 'sticky',
       top: '100vh',
       left: '0',
      width: '100%',
      padding: '20px 0',
      textAlign: 'center',
      color: 'white',
      background: 'rgba(0, 0, 0)', 
      backdropFilter: 'blur(5px)',    
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
    <p style={{ 
  display: 'flex', 
  flexDirection: 'row', 
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px' 
}}>   <a 
  href="https://www.linkedin.com/in/garvit-saxena-81687931b/" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{ textDecoration: 'none' }}
>
  <img 
    src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
    alt="LinkedIn" 
    style={{ 
      width: '24px', 
      height: '24px', 
      verticalAlign: 'middle' 
    }} 
  />
</a> 2026 TodoEase - Reach for the stars! ✨</p>
   
    </footer>
    </div>
  )
}

export default Footer
