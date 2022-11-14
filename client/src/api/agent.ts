import axios, { AxiosResponse } from 'axios'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'


axios.defaults.baseURL = 'https://localhost:7119/api/'

const responseBody = (response: AxiosResponse) => response.data

const Navigate = () => {
    // const history = useHistory()
    window.location.href="/catalog"
    // history.push('/server-error')
    // history.go(0)
}

axios.interceptors.response.use(response => {
    return response
},(error) => {
    const {data, status} = error.response
    switch(status){
        case 400:
            if(data.errors){
                const modelStateErrors: string[] = [];
                for(const key in data.errors){
                    if(data.errors[key]){
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title)
            break;
        case 401:
            toast.error(data.title)
            break;
        case 500:
            toast.error(data.title)
            window.location.href="/server-error"
            break;

        default:
            break;
    }
    return Promise.reject(error)
})

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url).then(responseBody),
    put: (url: string, body: {}) => axios.put(url).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Catalog = {
    list: () => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`)
}

const TestErrors = {
    get400Error: () => requests.get('ErrorHandler/bad-request'),
    get401Error: () => requests.get('ErrorHandler/unauthorized'),
    get404Error: () => requests.get('ErrorHandler/not-found'),
    get500Error: () => requests.get('ErrorHandler/server'),
    getValidationError: () => requests.get('ErrorHandler/validation'),
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;