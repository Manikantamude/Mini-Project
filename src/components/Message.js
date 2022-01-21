import React from 'react'

class Message extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.msg}</p>
            </div>
        )
    }
}
export default Message;