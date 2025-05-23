function addItem(cart, item, quantity) {
  if (quantity > 0) {
    cart[item] = quantity;
  }
}

function removeItem (cart, item, quantity){ 
  if (quantity <=0) {
    return;
  }
   cartIndex = cart.indexOf(item)
   if (cartIndex > -1){
      cart.splice(cartIndex, 1); 
   } 
   return cart; 
}

function getTotalItems(cart) {
    let total = 0;
    for (let item in cart) {
      const quantity = cart[item];
      if (typeof quantity === "number" && quantity > 0) {
        total += quantity;
      }
    }
    return total;
}



module.exports = { addItem, removeItem, getTotalItems }
