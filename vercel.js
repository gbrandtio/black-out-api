{
  "builds": [
      {
          "src": "index.js",
          "use": "@vercel/node"
      }
  ],
  "routes": [
      {
        "src": "/outages/outages/*",
        "dest": "/outages/outages/*"
      }
  ]
}