
import type { ProductDisplayProps } from "../../types";


function ProductDisplay({
    product,
    showDescription,
    showStockStatus,
    onAddToCart,
    children}:
    ProductDisplayProps){

        return(
      <div >
        <div className="ms-75">
        <img src={product.imageUrl} style={{ width: "15rem",marginTop:"50px" }}/>
        <h1>{product.name}</h1>
        <h2 className="text-blue-800 font-bold"> {product.price}</h2>
         {showDescription && <p className="text-sm text-gray-600 ">{product.description}</p> }
         {showStockStatus && <p className="text-sm text-green-400">{product.inStock ? "In Stock" : "Out of Stock"}</p>}
        </div>
         {onAddToCart && (
            <button onClick={()=> onAddToCart(product.id)}
            className="bg-blue-400 mt-2 px-4 text-white rounded hover:bg-blue-800 w-2xl">
                Add to Cart</button>
            

         )}
         {children}
      </div>

        )
    }
    export default ProductDisplay