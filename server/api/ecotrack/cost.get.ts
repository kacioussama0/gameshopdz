export default defineEventHandler(async (event) => {

    let query = getQuery(event);

    const token = 'cgBWdWd0E3xhr9MM06dertMc1qAJ5wjvUH0gp5gTcDTrlZlsxavdRrM4Ay4d'

    const response = await $fetch.raw(
        'https://golivri.ecotrack.dz/api/v1/get/fees',
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        }
    )


    let costs = response._data.livraison;

    if(query.wilaya_id) costs = costs.filter((cost) => cost.wilaya_id == query.wilaya_id)

    return  costs.map((wilaya)=> {

        const cost = {
            "wilaya_id": wilaya.wilaya_id,
            "tarif": Number(wilaya.tarif) + 100,
            "tarif_stopdesk": Number(wilaya.tarif_stopdesk) + 100,
        }

        if(wilaya.wilaya_id == 16) {
            cost.tarif_shop =  wilaya.wilaya_id == 16 ? 0 : ""
        }

        return cost
    })

    })

