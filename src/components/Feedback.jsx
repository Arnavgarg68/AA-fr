import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Feedback() {
  const navigate = useNavigate();
  const [formdata,setFormdata] = useState({
    username:"",
    title:"",
    about:"",
    rating:5
  });
  const handlechange =(e)=>{
    const {name,value}=e.target;
    setFormdata(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    if(formdata.about.length>300){
      alert("decrease words in about area till 300 words");
      return
    }
    try{
      const response = await fetch("https://amulyabackend.onrender.com/feedback",{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify(formdata)
      })
      // const result=await response.json
      if(!response.ok){
        alert("problem in server kindly try later");
      }
    }
    catch(error){
      console.log(error)
      return
    }
    alert("your response is recorded thank you!!")
    navigate('/home')
    setFormdata({
      username:"",
    title:"",
    about:"",
    rating:5
    })
  }
  return (
    <div className='feedback-main-body'>
      <div className="feedback-main-inner-body">
        <form action="" id="form-collect"className="feedback-form" onSubmit={handlesubmit}>
        <h1>Feedback form</h1>
        <input type="text" className="feedback-input" placeholder='Your name' name="username" value={formdata.username} required onChange={handlechange}/>
        <input type="text" className="feedback-input" placeholder='Title' name="title" value={formdata.title} required onChange={handlechange}/>
        <textarea name="about" id="feedback-textarea" className="feedback-input" cols="30" rows="30" placeholder='share your experience here' value={formdata.about} onChange={handlechange}></textarea>
        <div className="feedback-rating">
          <label htmlFor="feedback-stars">Rate your experience: </label>
          <select name="rating" id="feedback-stars" value={formdata.rating} onChange={handlechange}>
            <option value="1" className="feedback-star-option">1</option>
            <option value="2" className="feedback-star-option">2</option>
            <option value="3" className="feedback-star-option">3</option>
            <option value="4" className="feedback-star-option">4</option>
            <option value="5" className="feedback-star-option">5</option>
          </select>
        </div>
        <button type="submit" className='feedback-submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
// name
// topic
// content
// rating