const getAllProductsAction = async () => {

    let getProduct = await fetch ("http://localhost:8090/get/products",
        {
        method: "GET"
        } 
    )

    let response = await getProduct.json()
    
    return response

}

export default getAllProductsAction