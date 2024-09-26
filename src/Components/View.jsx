import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllUploadedVideosAPI, getCategoryAPI, updateCategoryAPI } from '../../service/allAPI'

function View({uploadVideoResponse,setDropVideoResponse}) {

  const[allVideos, setAllVidoes]=useState([])
  const[deleteVideoResponse, setDeleteVideoResponse]=useState(false)

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse, deleteVideoResponse])

  const getAllUploadedVideos = async()=>{
    const result = await getAllUploadedVideosAPI()
    if(result.status==200){
      setAllVidoes(result.data) //.data because the resultant data is fetched inside the data part
    }else{
      setAllVidoes([])
      console.log("API Failed");
      
    }
  }
  // console.log(allVideos);

  const videoDragOver = (e) => {
    e.preventDefault()
  }

  const videoDrop = async(e) => {
    const{videoId, categoryId} = JSON.parse(e.dataTransfer.getData("data"))
    console.log(videoId,categoryId);
    const {data} = await getCategoryAPI()
    // console.log(data);
    const selectedCategory = data.find(item=>item.id==categoryId)
    let result = selectedCategory.allVideos.filter(video=>video.id!==videoId)
    // console.log(result);
    let {id,categoryName} = selectedCategory
    let newCategory = {id, categoryName, allVideos:result}
    // console.log(newCategory);
    const res = await updateCategoryAPI(categoryId,newCategory)
    setDropVideoResponse(res)
  }
  

  return (
    <>
     <Row droppable="true" onDragOver={(e)=>videoDragOver(e)} onDrop={e=>videoDrop(e)}>
  {
    allVideos?.length > 0 ? allVideos.map(video => (
      <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
      </Col>
    )) : <p>Nothing to display</p>
  }
</Row>

    </>
  )
}

export default View
