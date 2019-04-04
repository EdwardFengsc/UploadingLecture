import React, {Component} from "react"
import LectureTag from "../Component/LectureTag"
import eventProxy from "react-eventproxy/src/eventProxy";
var counter = 2
class LectureTagsContainer extends Component{

    constructor(){
        super()
        this.state={
            lectureTags:[
                {id:1,value:"a"},
                {id:2,value:"b"}
            ]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleChange(event)
    {

        // console.log("change!")
        const {id,value} = event.target
        // console.log(id)
        // console.log(value)
        this.setState(prevState=> {
           const newtags = (
                prevState.lectureTags.map(item =>{
                    // console.log(item.id)
                    if(item.id == id){
                        item.value = value
                    }
                    return item
                })
            )
            const tags = (
                newtags.map(item =>
                    {return item.value}
                    )
            )
            this.props.setState({lectureTags: tags})    
            // console.log(newtags)
            return {
                lectureTags: newtags
            }
        })
        // this.props.setState({lectureTags: newtags})    
    }
    handleDelete(id){
        this.setState(prevState => {
            const newtags = (
                prevState.lectureTags.filter(item => item.id != id)
            )
            const tags = (
                newtags.map(item =>
                    {return item.value}
                    )
            )
            this.props.setState({lectureTags: tags})    
            return{
                lectureTags: newtags
            }
        })
        // eventProxy.trigger("lectureTags", newtags)
    }
    handleAdd(){
        counter ++
        // console.log(counter)
        // const newtags = (this.state.map(item => {return item}),{id:counter,value:""})
        // console.log(newtags)
        this.setState(prevState =>{

            const newtags = (
                prevState.lectureTags.map( item => {return item})
            )
            newtags.push({id:counter,value:""})
            return {
                lectureTags:newtags
            }
            // const newtags = (
            //     prevState.lectureTags.map(item => {return item})
            //     ,{id:counter,value:""}
            // )
            // console.log(newtags)
            // return {
            //     lectureTags: newtags
            // }

        })
        // eventProxy.trigger("lectureTags", newtags)
        // counter ++
        // this.setState(
        //     prevState => {
        //         return(
        //             prevState.lectureTags
        //         )
        //     }
        // )
    }
    // componentDidUpdate(){
    //     eventProxy.trigger("lectureTags", this.state.lectureTags)
    // }
    render(){
        // console.log(tags)
        // console.log(this.props)
        
        const lecturetaglist = this.state.lectureTags.map(tag => (
                <LectureTag 
                key={tag.id}
                id={tag.id} 
                value={tag.value} 
                handleChange={(event) => {this.handleChange(event);
                    }}//this.props.setState({lectureTags: tags});
                handleDelete={this.handleDelete}
                />
        ))
        return(
            <div>
                    {lecturetaglist}
                    <button 
                    type ="button" 
                    onClick={this.handleAdd} 
                    style={{marginTop:"5px"}}
                    className="btn btn-primary btn-sm"
                    >添加标签</button>
            </div>
        )
    }


}
export default LectureTagsContainer;