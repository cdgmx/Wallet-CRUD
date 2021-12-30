import axios from "axios";

import {
    WALLET_GET_REQUEST,
    WALLET_GET_SUCCESS,
    WALLET_GET_FAILURE,
} from "../constants/walletConstants";

export const getWallet = (wallet_address: any, private_key: any) => {
    return async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: WALLET_GET_REQUEST,
        });

        try {
            // const config = {
            //     headers: {
            //         "Content-type": "application/json",
            //     },
            // };

            const {data} = await axios.get(`/api/wallet/read`, {
                params: {
                    wallet_address: wallet_address,
                    private_key: private_key,
                },
                headers: {
                    "Content-type": "application/json",
                },
            });
        
            dispatch({
                type: WALLET_GET_SUCCESS,
                payload: data,
            });
        } catch (error) {
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