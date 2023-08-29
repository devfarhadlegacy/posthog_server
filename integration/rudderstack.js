import RudderAnalytics from "@rudderstack/rudder-sdk-node"
const rudderEvent = new RudderAnalytics("2UWhu5SpHYDlnUt0brzFpDxbMst", {
  dataPlaneUrl: "https://rudderstack.whgi.net/",
})

export default rudderEvent;