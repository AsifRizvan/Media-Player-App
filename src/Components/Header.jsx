import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
       <Navbar style={{ backgroundColor:'#1a1a1a'}}>
        <Container >
          <Navbar.Brand  className='fw-bolder'>
            <Link to={'/'} style={{textDecoration:'none', color:'#ff4d4d'}}>
              <i class="fa-solid fa-play fa-beat-fade me-3 fs-3"></i>    
                Media Player
            </Link>
          </Navbar.Brand> 
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
