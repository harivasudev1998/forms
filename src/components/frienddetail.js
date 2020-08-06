import React from 'react';
import axios from 'axios';
import { createHashHistory } from 'history'


class FriendDetail extends React.Component {
   
    constructor(props){
        super(props)
        this.state ={
            name:this.props.name,
            since:parseInt(this.props.since)
        }
       
    }



    deleteCurrentFriend=()=>{
        console.log("delete friend with id: " + this.props.id);
        this.props.deleteId(this.props.id)
    }

    editFriendWithId=()=>{
        console.log("edit friend with id: " + this.props.id);
        this.props.editId(this.props.id)
    }

  
//     sinceAdd=()=>{

//         console.log(this.state.since);
//         this.setState({since:this.state.since+1})
//         console.log(this.state.since);

//         let friendRequestBody = {
//             "name": this.state.name,
//             "since": this.state.since
//         }
//         axios.put('http://localhost:3000/allfriends/'+this.state.id, friendRequestBody)
//         .then(response=>{
//             console.log(response);
//             this.props.history.push('/')
//         }, error=>{
//             console.error(error);
//         })
// }

sinceAdd=()=>{

    console.log("edit friend with id: " + this.props.id);
    this.props.addId(this.props.id)
    history.push('/')

}

    sinceSub=()=>{

        console.log(this.state.since);
        this.setState({since:this.state.since-1})
        console.log(this.state.since);
    } 
    render() { 
      
        return ( 
            <tr>
                <td>{this.props.id} </td>
                <td>{this.props.name} </td>
                <td>{this.state.since}</td>
                <td>
                    <button onClick={this.sinceAdd}>Since + </button>
                </td>
                <td>
                    <button onClick={this.sinceSub}>Since - </button>
                </td>
                <td>
                    <button onClick={this.editFriendWithId}>Edit</button>
                </td>
                <td>
                    <button onClick={this.deleteCurrentFriend}>Del</button>
                </td>
                
            </tr>    
        )
    }
       
}
 
export default FriendDetail;
export const history = createHashHistory()