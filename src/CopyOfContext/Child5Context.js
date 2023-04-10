import React,{useContext} from 'react';
import {StudentContext, EmailContext} from "./Parent"

const Child5 = () => {
    const studentdata = useContext(StudentContext);
    const emailData = useContext(EmailContext);
    
  return (
    <div>Child5
        {studentdata.map((item)=>{
            return (
                <>
                <li>Name: {item.name}</li>
                <li>Age: {item.age}</li>
                </>
            )
        })}
    <p>email: {emailData}</p>
    </div>
  )
}

export default Child5