from sample.add import add
def handler(event, context):
    
    return {"message": add(1,2)}
