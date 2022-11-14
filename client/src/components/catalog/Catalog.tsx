
import { useState, useEffect } from "react";
import { Product } from "../../models/product"
import ProductList from "../ProductList/ProductList";
import agent from '../../api/agent'


export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        agent.Catalog.list().then(products => setProducts(products))
    }, [])


    return (
        <>
            <ProductList products={products} />


        </>
    )
}
