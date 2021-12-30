import {
    WALLET_CREATE_REQUEST,
    WALLET_CREATE_SUCCESS,
    WALLET_CREATE_FAILURE,
    WALLET_DELETE_REQUEST,
    WALLET_DELETE_SUCCESS,
    WALLET_DELETE_FAILURE,
    WALLET_UPDATE_REQUEST,
    WALLET_UPDATE_SUCCESS,
    WALLET_UPDATE_FAILURE,
    WALLET_GET_REQUEST,
    WALLET_GET_SUCCESS,
    WALLET_GET_FAILURE,
} from '../constants/walletConstants';

const types = {
    loading: Boolean,
    error: String,
    wallet: {
        wallet_address: String,
        private_key: String,
        balance: Number,
    },
};
export const getWalletReducer = (state = {wallet: {}, loading: Boolean, error:String}, action: { type: any; payload: any; } ) => {
    switch (action.type) {
        case WALLET_GET_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case WALLET_GET_SUCCESS:
            return {
                ...state,
                loading: false,
                wallet: action.payload,
            };
        case WALLET_GET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export const updateWalletReducer = (state = {updateBalance: {}, loading: Boolean, error:String}, action: { type: any; payload: any; } ) => {
    switch (action.type) {
        case WALLET_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case WALLET_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                updateBalance: action.payload,
            };
        case WALLET_UPDATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export const createWalletReducer = (state = {newWallet: {}, loading: Boolean, error:String}, action: { type: any; payload: any; } ) => {
    switch (action.type) {
        case WALLET_CREATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case WALLET_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                newWallet: action.payload,
            };
        case WALLET_CREATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export const deleteWalletReducer = (state = {removeStatus: {}, loading: Boolean, error:String}, action: { type: any; payload: any; } ) => {
    switch (action.type) {
        case WALLET_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case WALLET_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                removeStatus: action.payload,
            };
        case WALLET_DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
