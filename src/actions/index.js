import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

// 2. get list pf Posts useing getState
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //1. call 'fetchPost'
    //have to pass the result of calling fetchPost into the dispatch 
    // 'await' will making sure the fetchPOsts process successfully finishes properly
    console.log('About to fetch Posts...')
    await dispatch(fetchPosts());
    //console.log(getState().posts);
    //3. Iterate the state and get unique user ids
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // console.log(userIds); //[1,2,3,4,5,6,7,8,9,10]
    // userIds.forEach(id => dispatch(fetchUser(id)));
    //Optional refactor - clearer!
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()

};

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};






// Solution 1 - side affect: you can't update the user so it is not the best solution
// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// };
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });

//THIS DOES NOT WORK
// export const fetchUser = function (id) {
//     return _.memoize(async function (dispatch) {
//         const response = await jsonPlaceHolder.get(`/users/${id}`)
//         dispatch({ type: 'FETCH_USER', payload: response.data })
//     });
// };


// EXPLANATION ABOVE
//with redux thunk, ou can retun function
    //only returning one expression we are immediatly returning so don't even need to write 'return'



// TOTTALY FINE
// export const selectPost = () => {
//     return {
//         type: 'SELECT_POST'
//     }
// };

