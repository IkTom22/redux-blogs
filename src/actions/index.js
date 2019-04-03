import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};


export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: response.data })
}
// EXPLANATION ABOVE
//with redux thunk, ou can retun function
    //only returning one expression we are immediatly returning so don't even need to write 'return'



// TOTTALY FINE
// export const selectPost = () => {
//     return {
//         type: 'SELECT_POST'
//     }
// };

