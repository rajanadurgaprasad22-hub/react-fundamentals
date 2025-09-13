import "./ProductCard.css"
function ProductCard(product)
{
     const color=product.available ? "green" : "red";
     
    return (
        <div className="container">
            <p className="title">Product Name: {product.name}</p>
            <p className="age">Price : ₹{product.rate}</p>
            <p className="avail" style={{color}}>{product.available ? "In stock" : "Out of stock"}</p>
        </div>
    )
}
export default ProductCard;
