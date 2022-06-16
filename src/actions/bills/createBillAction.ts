const createBillAction = async (date:String, client:String, seller:String, totalPaid:Number, productId:String) => {

    const data = {

        date: date,
        client: client,
        seller: seller,
        totalPaid: totalPaid,
        productId: productId 
    }

    // let saveBill = await fetch("http://localhost:8090/create/bill",
    // {
    //     method:"POST",
    //     headers: {"content-type": "application/json"},
    //     body: JSON.stringify(data)
    // }
    // )

    let saveBill = await fetch("https://raul-back-webflux.herokuapp.com/create/bill",
    {
        method:"POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data)
    }
    )

    
    let response = await saveBill.json()

    return response
}

export default createBillAction