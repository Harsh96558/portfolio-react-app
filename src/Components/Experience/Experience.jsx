import React from 'react'
import "./Experience.css"

function Experience() {
  return (
    <div className='experience' id='Experience'>
      <div className="achievement">
        <div className="circle">.4</div>
        <span>Year</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>Project</span>
        <span>Completed (Self)</span>
      </div>
      <div className="achievement">
        <div className="circle" >1</div>
        <span>Company</span>
        <span>Work</span>
      </div>
    </div>
  )
}

export default Experience