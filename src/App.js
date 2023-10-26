import React, { useEffect, useState } from 'react'
const App = () => {
  const [data, setData] = useState([]);
  const [showDes,setShowDes] = useState(false);
  const show = {
  background:'lightgray',border:'1px solid black',padding:'18px',borderRadius:'8px',boxShadow:'5px 10px 10px black'
  }
  const Api_Key = 'QWTnmjkPqeinoWeWevYexoV0JvYb50iCMlvrRplT';
  const fetchData = async()=>{
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${Api_Key}`);
    const result = await response.json();
    console.log('hello');
    setData(result);
    console.log(result);
  }
  const handleExplanation = ()=>{
    setShowDes(!showDes);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center' ,height:'100vh',alignItems:'center'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
      <img onClick={handleExplanation} style={{display:'inline-block',height:'70%',position:'relative',marginTop:'40px',padding:'20px',opacity:showDes?'0.6':''}} src={`${data?.url}`}/>
      </div>
      <span style={{position:'absolute',fontWeight:'bold',maxWidth:'40%'}}>{showDes?data.explanation:''}</span>
      <span style={{marginTop:'-122px',textShadow:'2px 2px 3px grey', fontWeight:'bold'}}>Title Of the Pic</span> 
      <p style={{fontWeight:'600'}}>{data.title}</p>
    </div>
  )
}
export default App