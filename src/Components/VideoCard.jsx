import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addHistoryAPI, deleteAVideoAPI } from '../../service/allAPI';



function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);

    const{caption,link}=video

    let today = new Date()

    let timeStamp = new Intl.DateTimeFormat('en-US',{
      year:"numeric",
      month:"2-digit",
      year:"2-digit", 
      day:"2-digit", 
      hour:"2-digit", 
      minute:"2-digit", 
      second:"2-digit"
    }).format(today);

    let videoHistory = {caption, link, timeStamp}

    console.log(timeStamp);
    
    await addHistoryAPI(videoHistory)

  }

  const removeVideo = async(id)=>{
    await deleteAVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log("Drag Started.. VideoId",id);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <>
      <Card className='ms-3 mt-1 mb-4' style={{ width: "100%", backgroundColor: "#f5f5f5", boxShadow:'1px 1px 15px black' }} draggable onDragStart={(e)=>dragStarted(e,video?.id)}>
        <Card.Img variant="top"
        onClick={handleShow} src={video.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5 className='pt-2'>{video.caption}</h5>
          {insideCategory?null:<button className='bg-light text-danger fs-5 ms-2' onClick={()=>removeVideo(video.id)} style={{border:'none', borderRadius:'5px'}}><i class="fa-solid fa-trash"></i></button>}
          </Card.Title>
        </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
     
    </>
  )
}

export default VideoCard
