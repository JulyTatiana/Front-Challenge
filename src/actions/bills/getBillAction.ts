const getBillAction = async () => {

    let getBill = await fetch('http://localhost:8090/get/bills',
    {
        method: 'GET'
    }
    )

    let response = await getBill.json()

    return response
}

export default getBillAction