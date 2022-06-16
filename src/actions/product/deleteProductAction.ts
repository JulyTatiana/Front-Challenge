const deleteProductAction = async (id:string) => {

    console.log(id)

    // let response = await fetch(`http://localhost:8090/delete/product/${id}`,
    //     {
    //     method: 'DELETE',
    //     }
    // )

    let response = await fetch(`http://raul-back-webflux.herokuapp.com/delete/product/${id}`,
        {
        method: 'DELETE',
        }
    )

}

export default deleteProductAction