export default (state = [], action) => {
    // Rather than having a if statemen, often use switch statement
    // if (action.type === 'FETCH_POST') {
    //     return action.payload;
    // }
    // return state;
    //switch is a varid javascript code
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};