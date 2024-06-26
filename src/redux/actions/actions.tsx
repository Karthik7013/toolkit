import { productProps } from "../../types/propTypes";

const getProducts = (payload: productProps[]) => {
    return { type: 'GET_PRODUCTS', payload }
}


export { getProducts };