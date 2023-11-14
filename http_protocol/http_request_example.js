const httpRequest = {
    host: "localhost",
    port: "8000",
    method: "POST", //GET, PUT, DELETE
    path: "/payments",
    headers: {
        'content-type': "application/json",
        'content-length': 51
    },
    body: '{data: "The request body of the sample request."}'
}

const httpResponse = {
    statusCode: 200,
    headers: {
        'access-control-allow-origin': "https://test.example.com",
        'content-type': "application/json"
    },
    body: '{}'
}