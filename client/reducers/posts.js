//recuders takes  the action and a copy of the current state

function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log('incrementing likes!!')
      const i = action.index;
      return [
        ...state.slice(0, i), // before the one that is being updated
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // after the one that is being updated
      ];
    default:
      return state;
  }
}

export default posts;