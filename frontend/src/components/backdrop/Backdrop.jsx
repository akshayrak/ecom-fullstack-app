import React from 'react'
import "./backdrop.css"

const Backdrop = ({show, toggleStatus}) => {
    return (
       show && <div className="backdrop" onClick={()=>toggleStatus(false)}>
            
        </div>
    )
}

export default Backdrop
