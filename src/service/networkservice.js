import axios from 'axios'

const get = async (
    headers,
    baseUrl,
    url,
    params,
    successCallback = null,
    errorCallback = null,
) => {
    const config = {
        headers: headers,
        params: params || null,
    }
    const computedUrl = baseUrl + url

    try {
        const response = await axios.get(computedUrl, config)
        console.log('Response: ', response)
        if (successCallback) {
            return successCallback(response.data)
        }
        return response.data
    } catch (error) {
        console.log('Error: ', error)
        const err = (error.response && error.response.data) || error
        if (errorCallback) {
            return errorCallback(err)
        }
        throw err
    }
}

export default {
    get
}
