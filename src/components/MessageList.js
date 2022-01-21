import React from 'react'
import Message from './Message';
import MessageArea from './MessageArea'

class MessageList extends React.Component{
    constructor(){
        super();
        this.state={
            opposite:[]
        }
    }
    adddata=(i)=>{
        console.log("from messagelist component",i)
        this.setState({
            opposite:[...this.state.opposite,i]
        })
    }
    render(){
        return(
            <div>
                <MessageArea onSubmit={this.adddata} />
                
                {
                    this.state.opposite.map(y=>(
                        <Message msg={y.i}/>
                    ))
                }
            </div>
        )
    }
}
export default MessageList;