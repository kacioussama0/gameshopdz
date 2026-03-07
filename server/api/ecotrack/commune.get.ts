export default defineEventHandler(async (event) => {


    const token = 'cgBWdWd0E3xhr9MM06dertMc1qAJ5wjvUH0gp5gTcDTrlZlsxavdRrM4Ay4d'

    const response = await $fetch.raw(
        'https://golivri.ecotrack.dz/api/v1/get/communes',
        {
            headers: {
                Authorization: "Bearer " + token,
            },
        }
    )

    return  response._data;

    })

