const getAllReceiptsAction = async () => {

    // let getReceipt = await fetch("http://localhost:8090/get/products",
    // {
    //     method: 'GET'
    // }
    // )

    let getReceipt = await fetch("http://new-raul-enterprise.herokuapp.com/get/products",
    {
        method: 'GET'
    }
    )

    let response = await getReceipt.json()

    return response
}

export default getAllReceiptsAction