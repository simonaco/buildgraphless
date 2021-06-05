# Build demo

## Prerequisites

1. A recent version of [Node](https://nodejs.org/en/download) (8+)

1. [Azure Functions CLI](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=startup-0000-sicotin)

1. [Free Azure Account](https://azure.microsoft.com/free/?WT.mc_id=startup-0000-sicotin)

1. [Azure CLI](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest&WT.mc_id=startup-0000-sicotin)

## How to run this

1. Install dependencies: ```npm install```

1. Run locally: ```npm start```

1. Go to [http://127.0.0.1:8080](http://127.0.0.1:8080) and run query:

```json
mutation {
  incrementPoints(id:1){
    name
    points
  }
}
```

1. Deploy to the cloud

```
cd scripts
./deployment <unique app name>
```

Happy coding!
