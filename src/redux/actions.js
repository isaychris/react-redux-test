export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    message: {
        text: message, 
        edit: false
    }
})

export const deleteMessage = (index) => ({
    type: 'DELETE_MESSAGE',
    index: index
})

export const editMessage = (bool, index) => ({
    type: 'EDIT_MESSAGE',
    index: index,
    bool: bool
})

export const updateMessage = (message, index) => ({
    type: 'UPDATE_MESSAGE',
    index: index,
    message: {
        text: message,
        edit: false,
    }
})