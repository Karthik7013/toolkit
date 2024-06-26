import { actionProps, initialStateProps } from "../../types/propTypes";

const initialState: initialStateProps = {
    products: []
}


const reducer = (state = initialState, action: actionProps) => {
    const { payload, type } = action;
    switch (type) {
        case 'GET_PRODUCTS':
            return { ...state, products: payload };
        default:
            break;
    }

    return state;
}

export { reducer }