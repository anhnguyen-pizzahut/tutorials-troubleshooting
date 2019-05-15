exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        headers: { "x-custom-header" : "CUSTOM_HANDLER_VALUE" },
        body: "hello world"
    });
}
