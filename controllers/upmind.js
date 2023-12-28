import { posthog } from '../integration/postHog.js'


const allowedProperties = [
  "User",
  "account_name",
  "account_status",
  "account_type",
  "activation_date",
  "actor",
  "actor_type",
  "address",
  "address_1",
  "allow_product_credit",
  "amount",
  "amount_converted",
  "amount_for_refund_converted",
  "amount_for_refund_formatted",
  "amount_formatted",
  "amount_refunded_converted",
  "amount_refunded_formatted",
  "balance",
  "balance_formatted",
  "base_currency_code",
  "base_price",
  "base_price_exchange_rate",
  "base_price_formatted",
  "billing_cycle_days",
  "billing_cycle_months",
  "can_cancel",
  "can_create_next_invoice",
  "can_modify",
  "city",
  "code",
  "company",
  "company_address",
  "company_email",
  "company_name",
  "company_phone",
  "configuration_net_amount_discount_formatted",
  "configuration_net_amount_discounted_formatted",
  "configuration_net_amount_formatted",
  "configuration_net_selling_price_discount_formatted",
  "configuration_net_selling_price_discounted_formatted",
  "configuration_net_selling_price_formatted",
  "configuration_selling_price_discount_formatted",
  "configuration_selling_price_discounted_formatted",
  "configuration_selling_price_formatted",
  "configuration_total_amount_formatted",
  "configuration_total_discount_amount_formatted",
  "configuration_total_discounted_amount_formatted",
  "configuration_total_recurring_amount_converted",
  "configuration_total_recurring_amount_formatted",
  "configuration_total_recurring_discounted_amount_formatted",
  "configuration_total_recurring_net_amount_formatted",
  "configuration_total_recurring_net_discounted_amount_formatted",
  "cost",
  "cost_currency_code",
  "cost_exchange_rate",
  "cost_formatted",
  "country",
  "create_invoice_term",
  "created_at",
  "currency",
  "currency_code",
  "currency_name",
  "currency_prefix",
  "currency_suffix",
  "customer_portal_domain",
  "default_email/type",
  "deleted_at",
  "description",
  "discount_amount",
  "distinct_id",
  "document_amount_converted",
  "document_amount_converted_formatted",
  "domain",
  "elements_chain",
  "email",
  "email",
  "errors_0",
  "event",
  "event_datetime",
  "event_datetime",
  "firstname",
  "firstname",
  "fullname",
  "has_login",
  "has_login",
  "has_password",
  "hook_category",
  "hook_code",
  "hook_code",
  "hostname",
  "international_phone",
  "is_due",
  "is_provisioned",
  "language",
  "language_id",
  "last_login",
  "lastname",
  "lastname",
  "location_country_code",
  "location_source",
  "location_town",
  "message",
  "module_code",
  "name",
  "name",
  "name",
  "net_amount",
  "net_amount_converted",
  "net_amount_formatted",
  "net_amount_without_discount_formatted",
  "net_discount_amount",
  "net_discount_amount_formatted",
  "net_global_discount_amount",
  "net_global_discount_amount_formatted",
  "net_product_discount_amount",
  "net_product_discount_amount_formatted",
  "net_selling_price",
  "net_selling_price_formatted",
  "net_unit_selling_price_formatted",
  "next_due_date",
  "next_invoice_date",
  "object_type",
  "order",
  "organisation_code",
  "organisation_name",
  "package_name",
  "paid_amount_converted",
  "paid_amount_formatted",
  "paid_future_invoices",
  "partial_amount_credited_converted",
  "partial_amount_credited_formatted",
  "partial_amount_to_credit_converted",
  "partial_amount_to_credit_formatted",
  "payment_days_term",
  "phone",
  "phone_code",
  "postcode",
  "prefix",
  "product_name",
  "public_name",
  "quantity",
  "region_name",
  "reseller",
  "selling_price",
  "selling_price_converted",
  "selling_price_formatted",
  "server_hostname",
  "staff_portal_domain",
  "status",
  "suffix",
  "suspended",
  "tax_amount",
  "tax_amount_converted",
  "tax_amount_formatted",
  "tax_tag_name",
  "tax_type",
  "team_id",
  "timestamp",
  "total_amount",
  "total_amount_converted",
  "total_amount_formatted",
  "total_amount_without_discount_converted",
  "total_amount_without_discount_formatted",
  "total_discount_amount",
  "total_discount_amount_formatted",
  "total_recurrent_amount",
  "total_recurrent_amount_formatted",
  "total_unit_selling_price_converted",
  "total_unit_selling_price_formatted",
  "type",
  "type",
  "unit_quantity",
  "unpaid_amount",
  "unpaid_amount_converted",
  "unpaid_amount_formatted",
  "updated_at",
  "username",
  "username",
  "username",
  "vat_number",
  "vat_percentage"
]


const processProperties = (obj, depth = 0) => {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (depth <= 2) {
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
          // If the property is an object and depth is less than or equal to 2, recursively process it with increased depth
          const flattenedSubObject = processProperties(obj[key], depth + 1,);
          for (const subKey in flattenedSubObject) {
            if (flattenedSubObject.hasOwnProperty(subKey)) {
              result[key + "." + subKey] = flattenedSubObject[subKey];
            }
          }
        } else if (!Array.isArray(obj[key])) {
          // If it's not an object or an array, directly assign it to the result

          result[key] = obj[key];
        }
      }
    }
  }

  return result;
};



function sanitizeObject(obj, depth = 0) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Check if the property is undefined or "trial_end_action" with value "0"
      if (obj[key] === undefined || obj[key] === '' || obj[key] === '' || (key === "trial_end_action" && obj[key] === 0)) {
        delete obj[key];
      }
      // If the property is an object and we are at a depth of less than or equal to 2, recursively sanitize it
      else if (typeof obj[key] === "object" && depth < 2) {
        sanitizeObject(obj[key], depth + 1);
      }
    }
  }
}

function processEventName(inputString) {
  // Remove the last "_hook" from the string
  if (inputString.endsWith('_hook')) {
    inputString = inputString.slice(0, -5);
  }

  // Replace underscores with spaces
  inputString = inputString.replace(/_/g, ' ');

  // Capitalize the first character of every word
  inputString = inputString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return inputString;
}

function processDistinctId(properties) {
  if (properties.hook_category === 'invoice')
    return properties.object.client_id;
  else if (properties.hook_category === 'client')
    return properties.object_id;
  else if (properties.hook_category === 'contracts_product')
    return properties.object.contract.client_id;
  else if (properties.hook_category === 'invoice_payment')
    return properties.object.client_id;

  return "unknown";

}


const captureEvent = async (distinctId, res, next, event, properties) => {
  try {
    posthog.capture({
      distinctId,
      event,
      properties: {
        ...properties,
      },
    });
    res.send({ success: true, properties });
  } catch (error) {
    next(error);
  }
}


export const upmindWebhook = async (req, res, next) => {
  // console.log("start result \n\n\n ///////////////////////////////// \n\n\n");
  const obj = req.body;
  sanitizeObject(obj);
  const event = processEventName(obj.hook_code);
  const distinctId = processDistinctId(obj);
  const result = processProperties(obj);
  captureEvent(distinctId, res, next, event, result);
}


