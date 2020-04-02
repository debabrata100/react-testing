import React from 'react';
import { connect } from 'react-redux';
class CommentList extends React.Component{
    render(){
        return (
        <div>
            <ul>
               {
                   this.props.comments.map((comment,index)=>(
                    <li key={index}>{comment}</li>
                   ))
               }
            </ul>
        </div>);
    }
}
export default connect(state=>({
    comments: state.comments
}))(CommentList)