import axios from "axios";

import {
    WALLET_GET_REQUEST,
    WALLET_GET_SUCCESS,
    WALLET_GET_FAILURE,
    WALLET_CREATE_REQUEST,
    WALLET_CREATE_SUCCESS,
    WALLET_CREATE_FAILURE,
    WALLET_DELETE_REQUEST,
    WALLET_DELETE_SUCCESS,
    WALLET_DELETE_FAILURE,
    WALLET_UPDATE_REQUEST,
    WALLET_UPDATE_SUCCESS,
    WALLET_UPDATE_FAILURE,
} from "../constants/walletConstants";

export const getWallet = (wallet_address: any,signedData:any) => {
    return async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: WALLET_GET_REQUEST,
        });

        try {
            const {data} = await axios.get(`/api/wallet/read`, {
                params: {
                    wallet_address: wallet_address,
                    signedData:signedData,
                },
                headers: {
                    "Content-type": "application/json",
                },
            });
        
            dispatch({
                type: WALLET_GET_SUCCESS,
                payload: data,
            });
        } catch (error:any) {
            dispatch({
                type: WALLET_GET_FAILURE,
                payload:
                error.response && error.response.data.message
                ? error.response.data
                : error,
            });
        }
    };
}

export const updateWallet = (wallet_address: any, amount: any, signedData:any) => {
    return async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: WALLET_UPDATE_REQUEST,
        });

        try {
            const {data} = await axios.put(`/api/wallet/update`, {
                amount: amount,
            },
            { params: {
                wallet_address: wallet_address,
                signedData:signedData,
            },
            headers: {
                "Content-type": "application/json",
            },
            });
        
            dispatch({
                type: WALLET_UPDATE_SUCCESS,
                payload: data,
            });
        }
        catch (error:any) {
            dispatch({
                type: WALLET_UPDATE_FAILURE,
                payload:
                error.response && error.response.data.message
                ? error.response.data
                : error,
            });
        }
    };
}

export const createWallet = () => {
    return async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: WALLET_CREATE_REQUEST,
        });

        try {
            const {data} = await axios.post(`/api/wallet/create`,
            {
                headers: {
                    "Content-type": "application/json",
                },
            });
        
            dispatch({
                type: WALLET_CREATE_SUCCESS,
                payload: data,
            });
        }
        catch (error:any) {
            dispatch({
                type: WALLET_CREATE_FAILURE,
                payload:
                error.response && error.response.data.message
                ? error.response.data
                : error,
            });
        }
    };
}

export const deleteWallet = (wallet_address: any, signedData:any) => {
    return async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: WALLET_DELETE_REQUEST,
        });

        try {
            const payload= await axios.delete(`/api/wallet/delete`, {
                params: {
                    wallet_address: wallet_address,
                    signedData:signedData,
                },
                headers: {
                    "Content-type": "application/json",
                },
            });
            dispatch({
                type: WALLET_DELETE_SUCCESS,
                payload: payload,
            });
        }
        catch (error:any) {
            dispatch({
                type: WALLET_DELETE_FAILURE,
                payload:
                error.response && error.response.data.message
                ? error.response.data
                : error,
            });
        }
    };
}