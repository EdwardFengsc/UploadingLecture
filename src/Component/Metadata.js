import React from "react"
import "./Metadata.css"
import LectureTagsContainer from "../Container/LectureTagsContainer"
function Metadata(props){
    return(
        <div className="Metadata">
            <form>
                <br />
                        分享会名称:
                <br />
                <input 
                type="text" 
                name="lectureName" 
                value={props.lectureName}
                placeholder="LectureName"
                onChange={props.handleChange}
                size="12"
                />
                <br />
                        主讲人名字:
                <br />
                <input 
                type="text" 
                name="hostName" 
                value={props.hostName}
                placeholder="HostName"
                onChange={props.handleChange}
                size="12"
                />
                <br />
                        主讲人头衔:
                <br />
                <input 
                type="text" 
                name="hostTitle" 
                value={props.hostTitle}
                placeholder="hostTitle"
                onChange={props.handleChange}
                size="12"
                />
                <br />
                    讲师标签:
                <br />
                <input 
                type="text" 
                name="hostTag" 
                value={props.hostTag}
                placeholder="hostTag"
                onChange={props.handleChange}
                size="12"
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
                    讲师介绍:
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
                    分享会标签:
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
                    分享会介绍:
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
                    分享会开始时间:
                <br />
                <input 
                type="datetime-local" 
                name="startDate" 
                value={props.startDate}
                // placeholder="startTime"
                onChange={props.handleChange}
                />
                {/* <br />
                    RecapVideoTimeElapsed:
                <br />
                <input 
                type="text" 
                name="recapVideoTimeElapsed" 
                value={props.recapVideoTimeElapsed}
                placeholder="recapVideoTimeElapsed"
                onChange={props.handleChange}
                /> */}
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
                />是否是下一场分享会?
                </label>
                
                <br />
                <button 
                className="btn btn-primary btn-sm" 
                style={{lineHeight: "5%"}} 
                onClick={props.handleSubmit} 
                style={{marginRight:"5px"}}>提交</button>
                <button 
                className="btn btn-primary btn-sm" 
                onClick={props.handleReset}>重置</button>
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