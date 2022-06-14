import { jsonEval } from "@firebase/util"

const createReceiptAction = async(providerId:String, date:String, productUnits:Number, productId:String)=> {

    const data = {
        providerId: providerId,
        date:date,
        productUnits: productUnits,
        productId:productId
    }

    let saveReceipt = await fetch("http://localhost:8090/create/receipt",
    {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
    }
    )

    let response = await saveReceipt.json()

    return response

}

export default createReceiptAction