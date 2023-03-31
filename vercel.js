{
  "builds": [
      {
          "src": "index.js",
          "use": "@vercel/node"
      }
  ],
  "routes": [
      {
        "src": "/outages/getOutagesOfPrefecture/:prefectureId",
        "dest": "index.js"
      }
  ]
}