import ProductCategroy from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ShoppingButton from "./ShoppingButton";
import TitleProduct from "./TitleProduct";

export default function Product(){
    return (
        <article className="Product-card">
            <TitleProduct name ="Dragon-Zane" />
            <ProductCategroy cat="Ninjago" />
            <ProductPrice price="89 kr" />
            <ShoppingButton />
        </article>
    )
}