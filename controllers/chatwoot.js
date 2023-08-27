import rudderEvent from '../integration/rudderstack.js'
export const converstationCreated = async (req, res, next) => {
  console.log(req.body)
  try {
    rudderEvent.page({
      userId: "1hKOmRA4GRlm",
      category: "Food",
      name: "working with chatwooks",
      properties: {
        url: "https://example.com",
        title: "Pizza",
        referrer: "https://google.com",
      },
    })
    res.json({ message: "Success" })
  }
  catch (error) {
    next(error)
  }

}
export const converstationStatusChanged = async (req, res, next) => {
  try {

  }
  catch (error) {
    next(error)
  }

}
export const webWidgetTriggered = async (req, res, next) => {
  try {

  }
  catch (error) {
    next(error)
  }

}
export const contactCreated = async (req, res, next) => {
  try {

  }
  catch (error) {
    next(error)
  }

}
export const contactUpdated = async (req, res, next) => {
  try {

  }
  catch (error) {
    next(error)
  }

}





