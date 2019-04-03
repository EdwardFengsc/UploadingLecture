import React from "react"
import "./Metadata.css"
import LectureTagsContainer from "../Container/LectureTagsContainer"
function Metadata(props){
    return(
        <div className="Metadata">
            <form>
                <br />
                        LectureName:
                <br />
                <input 
                type="text" 
                name="lectureName" 
                value={props.lectureName}
                placeholder="LectureName"
                onChange={props.handleChange}
                />
                <br />
                        HostName:
                <br />
                <input 
                type="text" 
                name="hostName" 
                value={props.hostName}
                placeholder="HostName"
                onChange={props.handleChange}
                />
                <br />
                        HostTitle:
                <br />
                <input 
                type="text" 
                name="hostTitle" 
                value={props.hostTitle}
                placeholder="hostTitle"
                onChange={props.handleChange}
                />
                <br />
                    HostTag:
                <br />
                <input 
                type="text" 
                name="hostTag" 
                value={props.hostTag}
                placeholder="hostTag"
                onChange={props.handleChange}
                />
                {/* <br />
                <input 
                type="text" 
                name="hostIntro" 
                value={props.hostIntro}
                placeholder="hostIntro"
                onChange={props.handleChange}
                /> */}
                <br />
                    HostIntro:
                <br />
                <textarea 
                name="hostIntro"
                value={props.hostIntro}
                rows="5"
                cols="40"
                placeholder="hostIntro"
                onChange={props.handleChange}
                />
                <br />
                    LectureTags
                <br />
                <LectureTagsContainer setState={props.setState}/>
                {/* Todo lectureTags!!!!!! */}
                {/* <input 
                type="text" 
                name="startTime" 
                value={props.lectureIntro}
                placeholder="lectureIntro"
                onChange={props.handleChange}
                />
                <br /> */}
                <br />
                    LectureIntro:
                <br />
                <textarea 
                name="lectureIntro"
                value={props.lectureIntro}
                rows="5"
                cols="40"
                placeholder="lectureIntro"
                onChange={props.handleChange}
                />
                {/* <input 
                type="text" 
                name="lectureIntro" 
                value={props.lectureIntro}
                placeholder="lectureIntro"
                onChange={props.handleChange}
                /> */}
                <br />
                    StartTime:
                <br />
                <input 
                type="text" 
                name="startTime" 
                value={props.startTime}
                placeholder="startTime"
                onChange={props.handleChange}
                />
                <br />
                    RecapVideoTimeElapsed:
                <br />
                <input 
                type="text" 
                name="recapVideoTimeElapsed" 
                value={props.recapVideoTimeElapsed}
                placeholder="recapVideoTimeElapsed"
                onChange={props.handleChange}
                />
                {/* <br />
                    ID:
                <br />
                <input 
                type="text" 
                name="id" 
                value={props.id}
                placeholder="id"
                onChange={props.handleChange}
                size = "36"
                /> */}
                <br />
                <label>
                <input 
                type="checkbox" 
                name="ongoing" 
                checked={props.ongoing}
                onChange={props.handleChange}
                />OnGoing?
                </label>
                <br />
                <button onClick={props.handleSubmit} style={{marginRight:"15px"}}>Submit</button>
                <button onClick={props.handleReset}> Reset</button>
            </form>

            {/* <p>lectureName:{props.lectureName}</p>
            <br />
            <p>hostName:{props.hostName}</p>
            <br />
            <p>hostTitle:{props.hostTitle}</p>
            <br />
            <p>hostTag:{props.hostTag}</p>
            <br />
            <p><pre>hostIntro:<br />{props.hostIntro}</pre></p>
            <br />
            <p><pre>lectureIntro:<br />{props.lectureIntro}</pre></p>
            <br />
            <p>startTime:{props.startTime}</p>
            <br />
            <p>recapVideoTimeElapsed:{props.recapVideoTimeElapsed}</p>
            <br />
            <p>id:{props.id}</p>
            <br />
            <p>OnGoing? {props.ongoing? "Yes": "No"}</p>
            <br /> */}





            
        </div>
    )
}
export default Metadata