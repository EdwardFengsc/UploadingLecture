import React, { Component } from 'react';
import MetadataContainer from "./Container/MetadataContainer"
import PicturedataContainer from "./Container/PicturedataContainer"
import './App.css';
// import eventProxy from "../node_modules/react-eventproxy/src/eventProxy"


class App extends Component{
  // constructor(){
  //   super()
  //   this.state={
  //     ID:""
  //   }
  //   this.transferId=this.transferId.bind(this)
  // }
  // transferId(id){
  //   this.setState({ID:id})
  // }
  // componentDidUpdate(){
  //   console.log("ID did updated!")
  // }
  render(){
    // console.log("ID:",this.state.Id)
    return(
      <div className="App">
      {/* //       // <div> */}
        <header className="App-header">
      {/* //         <header> */}
          <MetadataContainer />
          {/* <PicturedataContainer /> */}
        </header>
      </div>

    )
  }
}
export default App;
// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//       lectureName:"shichao",
//       hostName:"shichao",
//       hostTitle:"professor",
//       hostTag:"great",
//       hostIntro:"hhhadasdasdsadasdhasihfiahisahfihiahfiashfifhsai",
//       lectureTags:[],
//       lectureIntro:"aa",
//       startTime:12312414,
//       recapVideoTimeElapsed:123214,
//       id:"ad726716-1d56-48aa-b52f-20cd13628422",
//       ongoing:true
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleReset = this.handleReset.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleChange(event){
//     const {name,value,type,checked} = event.target
//     type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]:value})

//   }
//   handleReset(event){
//     event.preventDefault()
//     this.setState({
//       lectureName:"",
//       hostName:"",
//       hostTitle:"",
//       hostTag:"",
//       hostIntro:"",
//       lectureTags:[],
//       lectureIntro:"",
//       startTime:0,
//       recapVideoTimeElapsed:0,
//       id:"",
//       ongoing:false
//     })
//   }
//   handleSubmit(event){
//     event.preventDefault()
//     console.log(JsonUtils.mapToJson(JsonUtils.objToStrMap(this.state)))
//   }
//   render() {
//     return (
//       <div className="App">
//       {/* // <div> */}
//         <header className="App-header">
//         {/* <header> */}
//         <Metadata 
//         handleChange = {this.handleChange}
//         handleReset = {this.handleReset}
//         handleSubmit = {this.handleSubmit}
//         {...this.state}
//         />
//         <Picturedata />
//           {/* <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a> */}
//         </header>
//       </div>
//       // <div>
//       //   <Metadata />
//       //   <Picturedata />
//       // </div>
//     );
//   }
// }

// export default App;