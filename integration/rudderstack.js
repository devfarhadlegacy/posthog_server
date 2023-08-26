const RudderAnalytics = require("@rudderstack/rudder-sdk-node")
const client = new RudderAnalytics("2UWhu5SpHYDlnUt0brzFpDxbMst", {
  dataPlaneUrl: "https://worldhostydxbs.dataplane.rudderstack.com",
})

module.exports = client;