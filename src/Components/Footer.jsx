import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
      <MDBFooter style={{backgroundColor:'#262626', color:'#f2f2f2'}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div >
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className='' style={{color:'#f2f2f2'}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-danger'  >
                <MDBIcon color='#ff4d4d' fas icon='play' className='me-3' />
                Media Player
              </h6>
              <p>
              Enjoy a seamless and personalized media experience by watching your favorite YouTube videos in one place. Relax and dive into your curated content effortlessly.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-danger'  >Resources</h6>
              <p>
                <a href='https://vitejs.dev/' className='text-reset'>
                  Vite
                </a>
              </p>
              <p>
                <a href='https://mui.com/material-ui/' className='text-reset'>
                  Material UI
                </a>
              </p>
              <p>
                <a href='https://mdbootstrap.com/' className='text-reset'>
                  MDBootstrap
                </a>
              </p>
              <p>
                <a href='https://react-bootstrap.netlify.app/' className='text-reset'>
                  React Boostrap
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-danger'  >Links</h6>
              <p>           
                <Link to={'/'} style={{textDecoration:'none', color:'#f2f2f2'}}>
                Landing Page
                </Link>
              </p>
              <p>
              <Link to={'home'} style={{textDecoration:'none', color:'#f2f2f2'}}>
                Home
                </Link>
              </p>
              <p>
              <Link to={'watch-history'} style={{textDecoration:'none', color:'#f2f2f2'}}>
                Watch History
                </Link>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-danger'  >Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-3' />
                ABCD, XY 12345, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                mediaplayer@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-2' /> +01 111 222 33
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Media-player.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
