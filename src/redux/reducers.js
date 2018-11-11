const initialState = {
    messages: [],
    number: 0
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            return Object.assign({}, state, {messages: [...state.messages, action.message], number: state.number + 1})
        case "DELETE_MESSAGE":
            const new_messages = [...state.messages].filter((message, index)=> index != action.index)
            return Object.assign({}, state, {messages: new_messages, number: state.number - 1})
        case "EDIT_MESSAGE":
            const edited_messages = [...state.messages].map((item, index) => {
                return index == action.index ? {text: item.text, edit: action.bool} : item
            })
            return Object.assign({}, state, {messages: edited_messages})
        case "UPDATE_MESSAGE":
            const updated_messages = [...state.messages].map((item, index) => {
                return index == action.index ? {text: action.message.text, edit: item.edit} : item
            })
            return Object.assign({}, state, {messages: updated_messages})
        default:
            return state;
    }
  };

  