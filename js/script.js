function favorite(idelem){
    if(getComputedStyle(document.getElementById(idelem)).opacity==1){
        document.getElementById(idelem).style.opacity=.5;
    }else{
        document.getElementById(idelem).style.opacity=1;
    }
}

function increaseQuantityPrice(idelem){
    var qty=0;
    var price=0;
    var cartTotal=0;

    //get initial quantity
    qty=parseInt(document.getElementById(idelem).innerHTML);
    //update quantity
    document.getElementById(idelem).innerHTML=qty+1;

    //get article price
    price= parseFloat(document.getElementById(idelem.replace("quantity","price")).innerHTML).toFixed(2);
    //get cart total
    cartTotal=parseFloat(document.getElementById("cart-total-price").innerHTML).toFixed(2);
    //update cart total
    var newTotal=0;
    newTotal=Number(price)+Number(cartTotal);
    document.getElementById("cart-total-price").innerHTML=newTotal.toFixed(2);
}

function decreaseQuantityPrice(idelem){
    var qty=0;
    var price=0;
    var cartTotal=0;

    //get initial quantity
    qty=parseInt(document.getElementById(idelem).innerHTML);
    if(qty==0){
        alert("you have reached the minimum quantity of 0 !!");
        return false;
    }
    //update quantity
    document.getElementById(idelem).innerHTML=qty-1;

    //get article price
    price= parseFloat(document.getElementById(idelem.replace("quantity","price")).innerHTML).toFixed(2);
    //get cart total
    cartTotal=parseFloat(document.getElementById("cart-total-price").innerHTML).toFixed(2);
    //update cart total
    var newTotal=0;
    newTotal=Number(cartTotal)-Number(price);
    document.getElementById("cart-total-price").innerHTML=newTotal.toFixed(2);
}

function removeArticle(idelem){
    var qty=0;
    var price=0;
    var cartTotal=0;
    
    //update total quantity
    //get article quantity
    qty=parseInt(document.getElementById(idelem+'-quantity').innerHTML);
    //get article price
    price= parseFloat(document.getElementById(idelem+'-price').innerHTML).toFixed(2);
    //get cart total
    cartTotal=parseFloat(document.getElementById("cart-total-price").innerHTML).toFixed(2);
    //update cart total
    var newTotal=0;
    newTotal=Number(cartTotal)-(Number(price)*Number(qty));
    document.getElementById("cart-total-price").innerHTML=newTotal.toFixed(2);

    //remove element
    document.getElementById(idelem).remove();
}