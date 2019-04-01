import React, { Component } from 'react';
import Metadata from "../Component/Metadata"
import JsonUtils from "../JsonParse/JsonUitl"
class MetadataContainer extends Component {
    constructor(){
      super()
      this.state={
        lectureName:"shichao",
        hostName:"shichao",
        hostTitle:"professor",
        hostTag:"great",
        hostIntro:"hhhadasdasdsadasdhasihfiahisahfihiahfiashfifhsai",
        lectureTags:["aaa","bbb"],
        lectureIntro:"aa",
        startTime:12312414,
        recapVideoTimeElapsed:123214,
        id:"",
        ongoing:true
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleReset = this.handleReset.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
      const {name,value,type,checked} = event.target
      type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]:value})
  
    }
    handleReset(event){
      event.preventDefault()
      this.setState({
        lectureName:"",
        hostName:"",
        hostTitle:"",
        hostTag:"",
        hostIntro:"",
        lectureTags:["aaa","bbb"],
        lectureIntro:"",
        startTime:0,
        recapVideoTimeElapsed:0,
        id:"",
        ongoing:false
      })
    }
    handleSubmit(event){
      event.preventDefault()
      const metedatajson = JsonUtils.mapToJson(JsonUtils.objToStrMap(this.state))
      const url = "http://localhost:8080/family/lecture"
      fetch(url,{
        method: 'POST',
        body: metedatajson,
        headers:{
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyZGU0YmMxZi0zY2IxLTQ4ZDMtOWY3NC0wYTAxYmU5M2RkZDQiLCJpc3MiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJhdWQiOiJodHRwOi8vZXhhbXBsZS5vcmciLCJzdWIiOiJGYW1pbHktVXNlci1iOTNjN2YxNC0xMjI0LTQ1OGItYWFmMS02NTI5NjM3MTA5M2QiLCJpYXQiOjE1NTM4OTU4MDgsImV4cCI6MTU1NjQ4NzgwOCwiYXV0aG9yaXRpZXMiOlsiU1lTVEVNX0FETUlOIl0sInJlZnJlc2hDb3VudCI6MCwicmVmcmVzaExpbWl0IjoyMDAwfQ.LwFp-NR5Wdmo2lxzOoRM7t0uze1EFcLhRGiVfdJR6cI'
        }
      }).then(res => res.json()).then(response => {
          const ID = response.id
          console.log(ID)
          this.setState({id: ID})
          // this.props.transferId(ID)
      }).catch(error => console.error("Error",error))
    //   console.log(JsonUtils.mapToJson(JsonUtils.objToStrMap(this.state)))
    }
    render() {
      console.log(this.state)
      return (
        <div>
        {/* // <div> */}
          <header>
          {/* <header> */}
          <Metadata 
          handleChange = {this.handleChange}
          handleReset = {this.handleReset}
          handleSubmit = {this.handleSubmit}
          {...this.state}
          />
          </header>
        </div>
      );
    }
  }
  
  export default MetadataContainer;