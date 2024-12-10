import { useState } from "react";

export const Home = () => {

    const products = [
        { id: 1, product: "camping cot", price: "53.99", stock: "in stock" },
        { id: 2, product: "hoodie blanket", price: "16.29", stock: "in stock" },
        { id: 3, product: "heating electric blanket", price: "37.18", stock: "out of stock" },
        { id: 4, product: "ice maker", price: "39.90", stock: "in stock" },
        { id: 5, product: "cloud light strip", price: "29.99", stock: "in stock" },
        { id: 6, product: "portable washer", price: "44.78", stock: "out of stock" },
        { id: 7, product: "hammock swing chair", price: "92.77", stock: "in stock" },
        { id: 8, product: "futon with adjustable armrest", price: "125.59", stock: "in stock" },
        { id: 9, product: "massage chair", price: "133.80", stock: "in stock" },
        { id: 10, product: "gaming chair", price: "66.26", stock: "out of stock" }
    ];

    return (
        <>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h3>item:{product.product}</h3>
                        <p>price:{product.price}</p>
                        <p>stock:{product.stock}</p>

                    </div>
                ))
            
            }
        </>
    )
        }