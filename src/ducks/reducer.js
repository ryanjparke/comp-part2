import axios from 'axios';

const initialState = {
    animals: [],
    cart: []
}

const GET_ANIMALS = "GET_ANIMALS"
const ADD_TO_CART = "ADD_TO_CART"

export function getAnimals() {
    let animals = axios.get('http:localhost:3005/api/animals')

    return {
        type: GET_ANIMALS,
        payload: animals.data
    }
}

export function addToCart(animal) {
    return {
        type: ADD_TO_CART,
        payload: animal
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        
        case GET_ANIMALS: Object.assign({}, state, action.payload)

        case ADD_TO_CART: Object.assign({}, state, {cart: [...state.cart, action.payload]} )

        default:
        return state
    }
}