//recuders takes  the action and a copy of the current state

function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      console.log('removing comment');
      console.log('item: ' + action.i)
      return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1),
      ];
    default:
      return state
  }
}


function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;