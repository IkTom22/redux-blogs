import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return <div>Post List</div>
    }
}
// first argument is always mapStateToProps and secont argument is action creater
export default connect(
    null,
    { fetchPosts: fetchPosts }
)(PostList);