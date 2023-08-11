def lambda_handler(event, context):
    
    print(event)

    return {
        "isBase64Encoded": True,
        "statusCode": 200,
        "headers": {},
        "body": "Hello world from generate details lambda"
    }
