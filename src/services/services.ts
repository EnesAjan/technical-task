import {ProductsResponse} from "@/type/product";


export async function getProducts(skip = 0, search = '', brand = '', sort = ''): Promise<ProductsResponse | null> {
    let sortOpt;
    if (sort) {
        sortOpt = sort.split("-")
    }
    try {
        const response = await (brand ? fetch(`https://dummyjson.com/products?&limit=194&sortBy=${sortOpt ? sortOpt[0] : ''}&order=${sortOpt ? sortOpt[1] : ''}`) : fetch(`https://dummyjson.com/products/search?q=${search}&sortBy=${sortOpt ? sortOpt[0] : ''}&order=${sortOpt ? sortOpt[1] : ''}&limit=18&skip=${skip}`));
        if (!response.ok) {
            console.warn(`Error: ${response.status} - ${response.statusText}`);
            return null;
        }
        const data: ProductsResponse = await response.json();

        if (sortOpt && sortOpt[1] === 'date') {
            if (sortOpt[2] === 'desc') {
                data.products = data.products.sort((a, b) => new Date(b.meta.createdAt).getTime() - new Date(a.meta.createdAt).getTime())
            }
            data.products = data.products.sort((a, b) => new Date(a.meta.createdAt).getTime() - new Date(b.meta.createdAt).getTime())
        }
        if (brand) {
            data.products = data.products.filter(pr => pr.brand === brand);
            return data as ProductsResponse;
        }

        return data;
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }

}

export async function getProductsByCategory(skip = 0, category: string, sort = ''): Promise<ProductsResponse | null> {
    let sortOpt;
    if (sort) {
        sortOpt = sort.split("-")
    }
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}?&sortBy=${sortOpt ? sortOpt[0] : ''}&order=${sortOpt ? sortOpt[1] : ''}&limit=18&skip=${skip}`);
        if (!response.ok) {
            console.warn(`Error: ${response.status} - ${response.statusText}`);
            return null;
        }

        const data: ProductsResponse = await response.json();
        if (sortOpt && sortOpt[1] === 'date') {
            if (sortOpt[2] === 'desc') {
                data.products = data.products.sort((a, b) => new Date(b.meta.createdAt).getTime() - new Date(a.meta.createdAt).getTime())
            }
            data.products = data.products.sort((a, b) => new Date(a.meta.createdAt).getTime() - new Date(b.meta.createdAt).getTime())
        }
        return data;
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
}

export async function getCategories(): Promise<string[] | null> {
    try {
        const response = await fetch(`https://dummyjson.com/products/category-list`);
        if (!response.ok) {
            console.warn(`Error: ${response.status} - ${response.statusText}`);
            return null;
        }
        const data: string[] = await response.json();
        return data.map(ct => ct.charAt(0).toUpperCase() + ct.slice(1));
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
}

export async function getProductsBrands(): Promise<string[] | null> {
    try {
        const response = await fetch(`https://dummyjson.com/products?&limit=194`);
        if (!response.ok) {
            console.warn(`Error: ${response.status} - ${response.statusText}`);
            return null;
        }
        const data: ProductsResponse = await response.json();
        const brands = data?.products.map(pr => pr.brand).sort((a, b) => a.localeCompare(b)).filter(i => i) as string[]
        return Array.from(new Set(brands));
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
}