define({ "api": [
  {
    "type": "get",
    "url": "/pairs",
    "title": "Get currency pairs",
    "name": "GetPairs",
    "group": "Currency_Pairs",
    "description": "<p>Get the currency pairs for which this connector can provide quotes and facilitate payments.</p>",
    "success": {
      "examples": [
        {
          "title": "Get Currency Pairs",
          "content": "HTTP/1.1 200 OK\n  [\n    {\n      \"source_asset\": \"USD\",\n      \"source_ledger\": \"https://usd-ledger.example/USD\",\n      \"destination_asset\": \"EUR\",\n      \"destination_ledger\": \"https://eur-ledger.example/EUR\"\n    },\n    {\n      \"source_asset\": \"EUR\",\n      \"source_ledger\": \"https://eur-ledger.example/EUR\",\n      \"destination_asset\": \"USD\",\n      \"destination_ledger\": \"https://usd-ledger.example/USD\"\n    },\n    {\n      \"source_asset\": \"JPY\",\n      \"source_ledger\": \"https://jpy-ledger.example/JPY\",\n      \"destination_asset\": \"USD\",\n      \"destination_ledger\": \"https://usd-ledger.example/USD\"\n    }]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/pairs.js",
    "groupTitle": "Currency_Pairs"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Get the server metadata",
    "name": "GetMetadata",
    "group": "Metadata",
    "version": "1.0.0",
    "description": "<p>This endpoint will return server metadata.</p>",
    "filename": "src/controllers/metadata.js",
    "groupTitle": "Metadata"
  }
] });
