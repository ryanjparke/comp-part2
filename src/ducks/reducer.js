import axios from 'axios';

const initialState = {
    animals: [],
    cart: []
}



const GET_ANIMALS = "GET_ANIMALS"
const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"


//action builders
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

export function removeFromCart(val) {
    return {
        type: REMOVE_FROM_CART,
        payload: val
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        
        case GET_ANIMALS: Object.assign({}, state, action.payload)

        case ADD_TO_CART: 
        const addAnimal = state.cart.slice();
        addAnimal.push(action.payload);
        return Object.assign({}, state, {cart: addAnimal} );

        case REMOVE_FROM_CART:
        const removeAnimal = state.cart.slice();
        removeAnimal.splice(action.payload, 1);
        return Object.assign({}, state, {cart: removeAnimal});

        default:
        return state
    }
}