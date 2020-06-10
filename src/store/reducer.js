
const booksReducer = (state, action) => {

  console.log("Reducer received action: ", action);
  
  // action: { type, payload}

  switch(action.type) {

    // handle ADD_BOOK action that was sent to us
    case "ADD_BOOK":
      let bookNew = action.payload // { title, author }
      bookNew.id = Date.now()

      // create a copy of the array were we wanna add something too
      let booksUpdated = [...state.books, bookNew]
      let stateCopy = {...state, books: booksUpdated}
      return stateCopy

    default: 
      return state
  }

}

export default booksReducer