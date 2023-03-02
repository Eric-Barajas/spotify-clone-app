export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    playing: false,
    item: null,
    //! REMOVE after finished developing (change back to null)................................
    // token: 'BQCMxFo38lmCIuCEAP_Uy0QZlXFnF_ljdomJb1JBdzWDUx1S0V581ov1hg3Mw4hgPpX0Cfe57z9JiyJXlSyuY7pQnM3ONxD2YiP - TrK0yVnom - NL4AjFuHlt - Vge2X25qY24146_FXQWCA2CfMregwehUsXSyDrcg_XUcP7uPVpiE10woGxr8Z7HXXwZY5eR5wHLba9x1ISMjDDmJI005w'
    token: null,
    discover_weekly: null,
    // hits: null
};

const reducer = (state, action) => {
    console.log("THIS IS THE ACTION", action);

    // Action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };

        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        // case 'SET_HITS':
        //     return {
        //         ...state,
        //         hits: action.hits
        //     }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;

    };
};

export default reducer;