import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoAPI } from '../../service/allAPI';

function Add({setUploadVideoResponse}) {

  const[uploadVideo,setUploadVideo]=useState({
    id:"",
    caption:"",
    url:"",
    link:""
  })

  const getYoutubeVideoLink = (e)=>{
    const {value}=e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo, link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo, link:""})
    }
  } 

  const handleAdd = async()=>{
    const{id,caption,url,link} = uploadVideo

    if(!id || !caption || !url){
      alert("Please Fill Missing Fields")
    }
    else if(!link){
      alert("Please provide a valid link")
    }
    else{
      //store video details to the json server
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);
      
      if(result.status>=200 && result.status<=300){
        //success
        handleClose()
        //alert
        alert("Uploaded Successfully")
        //after getting success message, fields should be empty
        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })
        setUploadVideoResponse(result.data)
      }
      else{
        console.log(result.message);
      }
    }
  }
  

  
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Lm8p5rlrSkY?si=xZSK_phnJcIUsRlD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-flex align-items-center">
      <h5 style={{fontSize:'30px'}}>Upload Videos</h5>
      <button onClick={handleShow} className='ms-2 mb-2 fs-5 bg-danger' style={{border:'none', borderRadius:'5px'}}><i class="fa-solid fa-arrow-up-from-bracket"></i></button>
    </div>

    {/* Modal  */}

       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel
            controlId="floatingInput"
            label="Video Id"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Video ID" onChange={(e)=>setUploadVideo({...uploadVideo, id:e.target.value})}/>
          </FloatingLabel>
          <FloatingLabel controlId="floatingTitle" label="Video Title" className='mb-3'>
            <Form.Control type="text" placeholder="Video Title" onChange={(e)=>setUploadVideo({...uploadVideo, caption:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingURL1"
            label="Image URL"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo, url:e.target.value})} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingURL2" label="Video URL">
            <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeVideoLink} /> 
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
