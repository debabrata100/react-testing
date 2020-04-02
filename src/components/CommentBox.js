import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
class CommentBox extends React.Component{
    state = {
        comment: ''
    }
    handleChange = (e) => {
        this.setState({comment: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // save comment
        this.props.saveComment(this.state.comment);
        this.setState({comment: ''})
    }
    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} 
                    value={this.state.comment} />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </React.Fragment>
        );
    }
}

export default connect(null, actions)(CommentBox);