import React, { useState } from "react";
import "../css/student-marks.css";
import axios from "axios";

export default function StudentMarks() {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [os, setOS] = useState("");
  const [cn, setCn] = useState("");
  const [java, setJava] = useState("");

  const getRollNo = (e: any) => {
    setRollNo(e.target.value);
  };
  const getName = (e: any) => {
    setName(e.target.value);
  };
  const getCollege = (e: any) => {
    setCollege(e.target.value);
  };
  const getCourse = (e: any) => {
    setCourse(e.target.value);
  };
  const getOs = (e: any) => {
    setOS(e.target.value);
  };
  const getCn = (e: any) => {
    setCn(e.target.value);
  };
  const getJava = (e: any) => {
    setJava(e.target.value);
  };

const sendData =(e:FormDataEvent)=>{
    e.preventDefault();
    console.log("rollno---->"+rollNo);
    console.log("name---->"+name);
    console.log("college---->"+college);
    console.log("course---->"+course);
    console.log("operating sys---->"+os);
    console.log("computer networks---->"+cn);
    console.log("java---->"+java);
    
    const stumarks = {
        rollNo,
        name,
        college,
        course,
        os,
        cn,
        java
    }

    axios.post("http://localhost:1234/klu/exam/results",stumarks)
    .then(
        (res)=>{
            console.log("result from spring boot--->"+res.data);
        }
    );

}



  return (
    <div className="stu-degn">
      <form>
        <div className="mb-3">
          <label className="form-label">RollNo</label>
          <input 
          onChange={getRollNo}
          type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
          onChange={getName}
           type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">College</label>
          <input 
          onChange={getCollege}
          type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input 
          onChange={getCourse}
          type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Operating System</label>
          <input 
          onChange={getOs}
          type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Computer Networks</label>
          <input 
          onChange={getCn}
          type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Java</label>
          <input 
          onChange={getJava}
          type="text" className="form-control" />
        </div>
        <button 
        onClick={sendData}
        type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
