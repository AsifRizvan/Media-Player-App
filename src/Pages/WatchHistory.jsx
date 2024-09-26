import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deleteHistoryAPI, getHistoryAPI } from '../../service/allAPI';


function WatchHistory() {
  const[history, setHistory]=useState([])

  useEffect(()=>{
    getHistory()
  },[])

  const getHistory = async()=>{
    const result = await getHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message); 
    }
  }

  const removeHistory = async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }
  

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <h1 className='' style={{fontSize:'30px'}}>Watch History</h1>
        </div>
        <Link to={'/home'} className='mb-2' style={{textDecoration:'none', color:'blueviolet', fontSize:'24px'}}>
        <i class="fa-solid fa-house fa-beat-fade"></i> Home 
        </Link>
      </div>
      <div className="container">
      <Table responsive hover>
        <thead className='bg-secondary'>
          <tr className='fs-6'>
            <th className='fw-bolder'>#</th>
            <th className='fw-bolder'>Caption</th>
            <th className='fw-bolder'>URL</th>
            <th className='fw-bolder'>TimeStamp</th>
            <th className='fw-bolder'>Action</th>
          </tr>
        </thead>
        <tbody>

        {
        history?.length>0?history.map((video,index)=>(
            <tr className='fs-6'>
            <td>{index+1}</td>
            <td>{video.caption}</td>
            <td><a href={video.link} target='_blank'>{video.link}</a></td>
            <td>{video.timeStamp}</td>
            <td><button className='bg-light text-danger fs-5 ms-2' onClick={()=>removeHistory(video?.id)} style={{border:'none', borderRadius:'5px'}}><i class="fa-solid fa-trash"></i></button></td>
          </tr>
          )): <p>Nothing to display</p>
        }
        </tbody>
      </Table>
      </div>
    </>
  )
}

export default WatchHistory
