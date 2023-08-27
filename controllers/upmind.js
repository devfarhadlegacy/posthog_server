import rudderEvent from '../integration/rudderstack.js'
export const clientRegistered = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Client Registered",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const clientLoggedIn = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "client Logged In",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const clientDeleted = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "client Deleted",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

// ... Continuing the same pattern for all your routes:

export const clientNotificationEmailsDeleted = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Client Notification Emails Deleted",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const clientLoginEmailUpdated = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Client Login Email Updated",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const clientUpdated = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Client Updated",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const contractProductActivated = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Contract Product Activated",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const contractProductCreated = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Contract Product Created",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const contractProductPackageChanged = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Contract Product Package Changed",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const contractProductPriceChanged = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Contract Product Price Changed",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const contractProductOwnershipChanged = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Contract Product Ownership Changed",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const contractProductRenewOff = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Contract Product Renew Off",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const contractProductCancelled = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Contract Product Cancelled",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const contractProductCurrencyChanged = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Contract Product Currency Changed",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const contractProductInvoicingStarted = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Contract Product Invoicing Started",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const contractProductSetupFailed = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Contract Product Setup Failed",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const invoiceCreated = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Invoice Created",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}

export const invoicePaymentFailed = async (req, res, next) => {
  try {
    rudderEvent.track({
      userId: "1hKOmRA4GRlm",
      event: "Invoice Payment Failed",
      properties: {
        revenue: 19.95,
        shippingMethod: "Premium",
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
}



