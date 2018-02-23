from apiserve import ApiServer, ApiRoute
import json
import requests



#GET my directions
@app.route("/direction")
    def directions:
        dir = requests.args.get("dir")
        message = requests.args.get("message")

    output = json.dumps([
        direction: str(dir),
        message: str(message)
    ])

    return output     

MyServer("127.0.0.1",1337).serve_forever()