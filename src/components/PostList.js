import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        console.log(this.props.posts);
        return <div>Post List</div>
    }
}
// any time you want to get data from redux side into react side, you always have to define map--- 
//(state) id from redux store
const mapStateToProps = (state) => {
    return { posts: state.posts };
}

// first argument is always mapStateToProps and secont argument is action creater
export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList);