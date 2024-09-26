import React, { useEffect, useState } from 'react'
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../../service/allAPI';
import VideoCard from './VideoCard';




function Category(dropVideoResponse) {

  const[categoryName,setCategoryName]=useState("")
  const[allCategories, setAllCategories]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async()=>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName, allVideos:[]})
      if(result.status>=200 && result.status<300){
        handleClose()
        alert("Category added successfully")
        setCategoryName("")
        getCategories()
      }else{
        alert(result.message)
      }
    }else{
      alert("Please add a category name")
    }
  }

  const getCategories = async () => {
    const {data} =  await getCategoryAPI()
    setAllCategories(data)
  }

  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])

  const removeCategory = async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }

  const dragOver = (e) =>{
    console.log("Video Card draggin over the category");
    e.preventDefault()
  }

  const videoDropped = async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData("VideoId")
    console.log("Video id:" + videoId + "Video dropped Category Id" + categoryId);
    const {data} = await getAVideoAPI(videoId)
    // console.log(data);
    const selectedCategory = allCategories.find(item=>item.id == categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);
    await updateCategoryAPI(categoryId, selectedCategory)
    getCategories()
  }
  // console.log(allCategories);

  const videoDragStarted = (e,videoId,categoryId)=>{
    let datashare = {videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(datashare))
  }
  

  return (
    <div className='ms-4'>
      <div className="d-grid">
        <button className='btn btn-danger p-3' onClick={handleShow}>Add Category</button>
      </div>

     {allCategories?.length > 0 ? (
      allCategories.map((category) => (
        <div className="border rounded mt-4 p-3" droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={e=>videoDropped(e,category.id)}>
          <div className="d-flex justify-content-between align-items-center">
            <h5>{category.categoryName}</h5>
            <i className="fa-solid fa-trash text-danger" onClick={()=>removeCategory(category.id)}></i>
          </div>
          <Row>
            {
              category?.allVideos?.length>0?category?.allVideos.map(card=>(
                <Col className='pe-5 pt-2' sm={12} draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                  <VideoCard video={card} insideCategory = {true}/>
                </Col>
              )):null
            }
          </Row>
        </div>
      ))
    ) : 
      <p>Nothing to display</p>
    }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <FloatingLabel controlId="floatingTitle" label="Category" className='mb-3'>
            <Form.Control type="text" placeholder="Category Name" onChange={(e)=>setCategoryName(e.target.value)}  />
          </FloatingLabel>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Category
