import {posthog} from '../integration/postHog.js'


const captureEvent = async (req, res, next, event, properties) => {
  try {
    posthog.capture({
      distinctId: req.body.webhook_event_id,
      event,
      properties: {
        ...properties,
      },
    });
    res.send({success: true});
  } catch (error) {
    next(error);
  }
}

export const clientRegistered = async (req, res, next) => {
  const event = "Client Registered";
  const properties = { ...req.body };
  captureEvent(req, res, next, event, properties);
}

export const clientLoggedIn = async (req, res, next) => {
  const event = "Client Logged In";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const clientDeleted = async (req, res, next) => {
  const event = "Client Deleted";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const clientNotificationEmailsDeleted = async (req, res, next) => {
  const event = "Client Notification Emails Deleted";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const clientLoginEmailUpdated = async (req, res, next) => {
  const event = "Client Login Email Updated";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const clientUpdated = async (req, res, next) => {
  const event = "Client Updated";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const contractProductActivated = async (req, res, next) => {
  const event = "Contract Product Activated";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const contractProductCreated = async (req, res, next) => {
  const event = "Contract Product Created";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const contractProductPackageChanged = async (req, res, next) => {
  const event = "Contract Product Package Changed";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const contractProductPriceChanged = async (req, res, next) => {
  const event = "Contract Product Price Changed";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const contractProductOwnershipChanged = async (req, res, next) => {
  const event = "Contract Product Ownership Changed";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const contractProductRenewOff = async (req, res, next) => {
  const event = "Contract Product Renew Off";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const contractProductCancelled = async (req, res, next) => {
  const event = "Contract Product Cancelled";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const contractProductCurrencyChanged = async (req, res, next) => {
  const event = "Contract Product Currency Changed";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const contractProductInvoicingStarted = async (req, res, next) => {
  const event = "Contract Product Invoicing Started";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const contractProductSetupFailed = async (req, res, next) => {
  const event = "Contract Product Setup Failed";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const invoiceCreated = async (req, res, next) => {
  const event = "Invoice Created";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}

export const invoicePaymentFailed = async (req, res, next) => {
  const event = "Invoice Payment Failed";
  const properties = {...req.body};
  captureEvent(req, res, next, event, properties);
}
