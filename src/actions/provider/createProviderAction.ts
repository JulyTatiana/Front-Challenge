const createProviderAction = async (providerName: String, providerIdentification: String, providerAddress: String) => {

    const data = {
        providerName: providerName,
        providerIdentification: providerIdentification,
        providerAddress: providerAddress
    }

    // let saveProvider = await fetch("http://localhost:8090/create/provider",
    //     {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(data)
    //     }
    // )

    let saveProvider = await fetch("http://raul-back-webflux.herokuapp.com/create/provider",
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        }
    )


    let response = await saveProvider.json()

    return response
}

export default createProviderAction