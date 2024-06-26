type initialStateProps = {
    products: productProps[] | []
}


type productProps = {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": {
        "rate": number,
        "count": number
    }
}

type actionProps = {
    type: string,
    payload: any
}

export type { productProps, initialStateProps, actionProps }