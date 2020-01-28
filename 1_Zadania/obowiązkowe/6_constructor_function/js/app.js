//Zadanie 0
var Basket=function(products=[],sum=0 ){
    this.products=products;
    this.sum=sum;
};

Basket.prototype.addProduct=function(name,price){
    this.products+=(' ',name);
    this.sum+=price;
};

Basket.prototype.showBasket=function(){
    console.log( this.products,'',this.sum);
}
