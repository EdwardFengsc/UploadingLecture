import React from "react"
function LectureTag(props){
    return(
        <div>
        <input type="text" id={props.id} value={props.value} onChange={props.handleChange}/>
        <button type="button" onClick={() => props.handleDelete(props.id)}>deleted</button>
        </div>
    )
}
export default LectureTag;