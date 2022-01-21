import React from 'react'

class MessageArea extends React.Component{
    constructor(){
        super();
        this.state={
            txt:""
        }
    }
    storedata=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    senddata=()=>{
        this.props.onSubmit({
            i:this.state.txt
        })
        this.setState({
            txt:""
        })
    }
    render(){
        return(
            <div>
                <input onChange={this.storedata} value={this.state.txt} name="txt" type="text" placeholder="Type a message" />
                <button onClick={this.senddata} >clickme</button>
            </div>
        )
    }
}
export default MessageArea;