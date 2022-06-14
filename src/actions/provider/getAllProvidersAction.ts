const getAllProvidersAction = async () => {
    
    let getProvider = await fetch("http://localhost:8090/get/providers",
        {
            method: "GET"
        }
    )
    let response = await getProvider.json()

    return response
}

export default getAllProvidersAction