

const initialState = {
    // error: null,
    isError: false,
    images: []
}

export default function homeReducer(state = initialState, action) {
    console.log("In Images reducer > ", action);
    switch (action.type) {
        case "API":
            return {
                ...state,
                isError: false,
                screen: action.screen,
                statusCode: action.statusCode,
                data: []
            }
        case "SAVE_IMAGE":
            return {
                ...state,
                images: action.payload
            }
        case 'API_FAILURE':
            return {
                ...state,
                error: action.error,
                isError: true,
                screen: action.screen,
                statusCode: action.statusCode,
                data: []
            }
        default:
            return state
    }
}