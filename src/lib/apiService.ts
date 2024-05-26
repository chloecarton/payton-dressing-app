// lib/apiService.ts
import type { ApiResponse, Product } from '$lib/types';
export const baseUrl = `${import.meta.env.VITE_API_URL}/exec`


export async function getProductListData(): Promise<Product[]> {
    try {
        const response = await fetch(baseUrl+"?action=product.list", {
            method: "GET",
            headers: {
                "Content-type": "text/plain;charset=utf-8",
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Methods": "GET, POST",
                // "Access-Control-Allow-Headers": "Content-Type"
            },
            redirect: "follow"
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${baseUrl}: ${response.statusText}`);
        }
        const responseJson = await response.json() as ApiResponse;
        console.log(responseJson)
        const products = responseJson.data as Product[]
        console.log(products[0])
        return products
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function getProductData(reference:string): Promise<Product> {
    try {
        const response = await fetch(baseUrl+"?action=product.get_by_ref&product_ref="+reference, {
            method: "GET",
            headers: {
                "Content-type": "text/plain;charset=utf-8",
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Methods": "GET, POST",
                // "Access-Control-Allow-Headers": "Content-Type"
            },
            redirect: "follow"
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${baseUrl}: ${response.statusText}`);
        }
        const responseJson = await response.json() as ApiResponse;
        console.log(responseJson)
        const product = responseJson.data as Product
        console.log(product)
        return product
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}