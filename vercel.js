{
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  {
    "rewrites": [
      {
        "source": "/api/(.*)",
        "destination": "/api"
      }
    ]
  }
}