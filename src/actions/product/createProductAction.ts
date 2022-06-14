const createProductAction = async (productName:String, productDescription:String, minQuantity:Number, maxQuantity:Number, availableUnits:Number, productPrice:Number, productId:String ) => {

    const data = {
        productName: productName,
        productDescription: productDescription,
        minQuantity: minQuantity,
        maxQuantity: maxQuantity,
        availableUnits: availableUnits,
        productPrice: productPrice,
        productId: productId
    }

    let saveProduct = await fetch("http://localhost:8090/create/provider",
    {
        method:"POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data)
    }
    )

    let response = await saveProduct.json()

    return response

}

export default createProductAction