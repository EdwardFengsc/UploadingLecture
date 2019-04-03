import React from "react"
import "./Picturedata.css"
function Picturedata(props){
    return(
        <div>
            <form>
            <label> ID:
            <input 
            type="text"
            name="id"
            value={props.id}
            onChange={props.handleChange}
            size="36"
            readOnly
            />
            </label>
            <br />
             Host_avatar:
            <br />
            <input 
            type="file" 
            name="host_avatar"
            value={props.host_avatar}
            accept="image/png"
            onChange={props.handleChange}
            />
            <br />
             Host_avatar_rect:
            <br />
            <input 
            type="file" 
            name="host_avatar_rect"
            value={props.host_avatar_rect}
            accept="image/png"
            onChange={props.handleChange}
            />
            <br />
                Lecture_banner:
            <br />
            <input 
            type="file" 
            name="lecture_banner"
            value={props.lecture_banner}
            accept="image/png"
            onChange={props.handleChange}
            />
            <br />
             Sharing_pic:
            <br />
            <input 
            type="file" 
            name="sharing_pic"
            value={props.sharing_pic}
            accept="image/png"
            onChange={props.handleChange}
            />
            <br />
            <button onClick={props.handleSubmit} style={{marginRight:"15px"}}>Submit</button>
            <button onClick={props.handleReset}>Reset</button>
            </form>
        </div>

    )
}
export default Picturedata;