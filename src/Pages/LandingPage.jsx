import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
  <>
  <div className="container mt-5 mb-5">
    <Row className="mt-5 mb-5 w-100 align-items-center">
        <Col md={6} className="text-center text-md-start">
          <h1 style={{ fontSize: "48px", color: "#1a1a1a" }}>
            Welcome to <span style={{ color: "#ff4d4d" }}>Media-Player</span>
          </h1>
          <p style={{ color: "#333333" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis nobis cumque maxime nesciunt. Quaerat a nostrum voluptatibus amet, esse quibusdam consectetur nulla ea, beatae, consequatur dolor exercitationem eum culpa.
          </p>
          <button
            onClick={() => navigateByUrl("./home")}
            className="btn btn-danger rounded-2 text-white mt-3 p-3"
            style={{ width: '200px' }}
          >
            Get Started
          </button>
        </Col>
        <Col md={6} className="text-center mt-4 mt-md-0">
          <img
            src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif"
            alt="Media Player GIF"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Col>
    </Row>
  </div>


<div className="container mb-5 mt-5">
  <h3 className="text-center mb-3 fw-bolder" style={{ color: "#1a1a1a" }}>Features</h3>
  <div className="row">
    <div className="col-md-4 mb-4 d-flex justify-content-center">
      <Card style={{ width: "100%", backgroundColor: "#f5f5f5", boxShadow:'1px 1px 15px black' }} className="p-4">
        <Card.Img
          variant="top"
          src="https://i.gifer.com/origin/ce/ce9b1b80a59bc4090dcded493ccba5f3.gif"
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title className="text-danger">Managing Videos</Card.Title>
          <Card.Text style={{ color: "#666666" }}>
            Manage your video collection with ease and efficiency.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div className="col-md-4 mb-4 d-flex justify-content-center">
      <Card style={{ width: "100%", backgroundColor: "#f5f5f5", boxShadow:'1px 1px 15px black' }} className="p-4">
        <Card.Img
          variant="top"
          src="https://i.gifer.com/origin/78/78270fde30bdca8fec52f86bfa7cab0c_w200.gif"
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title className="text-danger">Categorized Videos</Card.Title>
          <Card.Text style={{ color: "#666666" }}>
            Organize your videos into easy-to-access categories.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div className="col-md-4 mb-4 d-flex justify-content-center">
      <Card style={{ width: "100%", backgroundColor: "#f5f5f5", boxShadow:'1px 1px 15px black' }} className="p-4">
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/70/96/e4/7096e4a2da7594039d35b4029c18a3c0.gif"
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title className="text-danger">Watch History</Card.Title>
          <Card.Text style={{ color: "#666666" }}>
            Track and review your viewing history at any time.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>

<div className="container p-4 mb-5" >
  <div className="row">
    <div className="col-md-6 mb-4 mb-md-0">
      <h4 className="text-danger text-center text-md-start">Simple, Powerful & Fast</h4>
      <h6 className="mt-3 text-center text-md-start" style={{ color: "#666666" }}>
        <span className="text-danger fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore velit vitae vel, eos totam aut minima quae ullam voluptatum inventore, excepturi deserunt adipisci maiores ea officia fuga. Expedita, voluptatem!
        Itaque esse, fuga doloremque vero omnis nesciunt. Natus quibusdam cupiditate delectus ut corrupti distinctio quos modi, doloremque reiciendis laboriosam qui, voluptas dignissimos dolor quas nihil nisi! Omnis deleniti et unde?
      </h6>
      <h6 className="mt-3 text-center text-md-start" style={{ color: "#666666" }}>
        <span className="text-danger fw-bolder">Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore velit vitae vel, eos totam aut minima quae ullam voluptatum inventore, excepturi deserunt adipisci maiores ea officia fuga. Expedita, voluptatem!
        Itaque esse, fuga doloremque vero omnis nesciunt. Natus quibusdam cupiditate delectus ut corrupti distinctio quos modi, doloremque reiciendis laboriosam qui, voluptas dignissimos dolor quas nihil nisi! Omnis deleniti et unde?
      </h6>
      <h6 className="mt-3 text-center text-md-start" style={{ color: "#666666" }}>
        <span className="text-danger fw-bolder">Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore velit vitae vel, eos totam aut minima quae ullam voluptatum inventore, excepturi deserunt adipisci maiores ea officia fuga. Expedita, voluptatem!
        Itaque esse, fuga doloremque vero omnis nesciunt. Natus quibusdam cupiditate delectus ut corrupti distinctio quos modi, doloremque reiciendis laboriosam qui, voluptas dignissimos dolor quas nihil nisi! Omnis deleniti et unde?
      </h6>
    </div>
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/ccpVpcP8m44?si=5Y4s7V1xqG2vPiRb"
        title="Best of Sushin Shyam 2023 | Audio Jukebox | Hits of Sushin Shyam | OST"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded"
      ></iframe>
    </div>
  </div>
</div>

      </>
  )
}

export default LandingPage
