module.exports = {
  "ci": false,
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    ["@semantic-release/exec", {
      "verifyReleaseCmd": "echo '{\"version\":\"${nextRelease.version}\",\"release_date\":${Date.now()}}'>./src/assets/version.json"
    }]
  ]

}