const notes = (state = [], action) => {
    switch(action.type) {
        case 'NOTES':
            return action.notes
        case 'ADD_A_NOTE':
            return [...state, action.note ]
        default:
            return state
    }
}

export default notes