
export default function cartReducer(state,action){
    switch (action.type) {
        case 'ADDTOCART':
          return {...state,cartCount: state.cartCount + 1,products:[...state.products,action.payload]};
        case 'REMOVEFROMCART':
   
            return{...state,
                cartCount: state.cartCount - 1,
                products: state.products.filter((item,i)=>{
                    return i !== action.payload;
                }),}
        default:
          throw new Error();
      }
}