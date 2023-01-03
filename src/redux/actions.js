export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'


export const add_favorite = (character) =>{
    return{
        type: ADD_FAVORITE,
        payload: character,
    }
}

export const delete_favorite = (id) =>{
    return{
        type: DELETE_FAVORITE,
        payload: id,
    }
}