const deleteProviderAction = async (id:string) => {

    console.log(id);

    // let response = await fetch(`http://localhost:8090/delete/provider/${id}`,
    //     {
    //         method: 'DELETE',
    //     }
    // )

    let response = await fetch(`http://new-raul-enterprise.herokuapp.com/delete/provider/${id}`,
        {
            method: 'DELETE',
        }
    )

    console.log(response)
    let data = await response.ok

    return data
}

export default deleteProviderAction