import rudderEvent from '../integration/rudderstack.js'
export const converstationCreated = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "converstation_created",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    })
    res.send();
  }
  catch (error) {
    next(error)
  }

}
export const converstationStatusChanged = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "converstation_status_changed",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    })
    res.send();
  }
  catch (error) {
    next(error)
  }

}
export const webWidgetTriggered = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "web_widget_triggered",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    })
    res.send();
  }
  catch (error) {
    next(error)
  }

}
export const contactCreated = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "contact_created",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    })
    res.send();
  }
  catch (error) {
    next(error)
  }

}
export const contactUpdated = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "contact_updated",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    })
    res.send();
  }
  catch (error) {
    next(error)
  }

}





