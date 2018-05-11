import config from './config'

const api = {
    get(route, query) {
        return (
            fetch(config.apiRoot + route, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(query)
            })
            .then(res => res.json())
        )
    }
}

export default api
