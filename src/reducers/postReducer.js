export default (state, action) => {
    //BAD!!
    // return document.querySelector('#input')
    // BAD!!
    //return axios.get('/posts')
    //BAD!!
    // state[0] = 'Sam; or state.name= 'Sam'
    // state.pop();

    //GOOD!!
    // return state + action
    return 123;

};