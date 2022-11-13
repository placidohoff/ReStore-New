import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../models/product";
import ProductCard from "../ProductCard/ProductCard";

interface Props {
    products: Product[]
}

export default function ProductList({ products }: Props) {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={3} key={product.id}>
                    <ProductCard key={product.id} product={product} />
                </Grid>
            ))}
        </Grid>
    )
}
