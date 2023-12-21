import { posthog } from '../integration/postHog.js'


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

const acceptedEventPropeties = [
  'event',
  'properties',
  'event_datetime',
  'hook_code',
  'object',
  'public_name',
  'image_url',
  'first_name',
  'last_name',
  'full_name',
  'login_email',
  'login_username',
  'notification_email',
  'verified',
  'avatar_src',
  'interface_language',
  'document_language',
  'created_at',
  'updated_at',
  'has_password',
  'has_login',
  'is_guest',
  'default_address',
  'actor_type',
  'actor',
  'brand',
  'name',
  'code',
  'customer_portal_domain',
  'staff_portal_domain',
  'company_name',
  'country',
  'language',
  'currency',
  'tax_type',
  'timestamp',
  'team_id',
  'distinct_id',
  'elements_chain'
]

const processProperties = (properties) => {
  // Initialize an empty object to store the flattened result
  var result = {};

  // Define a recursive function to process nested structures
  function recurse(cur, prop) {
    // If the current element is not an object, assign it to the result
    if (Object(cur) !== cur) {
      result[prop] = cur;
    }
    // If the current element is an array, recursively process its elements
    else if (Array.isArray(cur)) {
      for (var i = 0, l = cur.length; i < l; i++)
        recurse(cur[i], prop + "[" + i + "]");
      // If the array is empty, assign an empty array to the result
      if (l == 0)
        result[prop] = [];
    }
    // If the current element is an object, recursively process its properties
    else {
      var isEmpty = true;
      for (var p in cur) {
        isEmpty = false;
        // Recursively process the nested property
        recurse(cur[p], prop ? prop + "." + p : p);
      }
      // If the object is empty and it's not the root object, assign an empty object to the result
      if (isEmpty && prop)
        result[prop] = {};
    }
  }
  recurse(properties, "")
  return result
}

function processString(inputString) {
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
    return properties.contract.client_id;
  else if (properties.hook_category === 'invoice_payment')
    return properties.object.client_id;

  return "unknown";

}

export const upmindWebhook = async (req, res, next) => {
  console.log("start result :///////////////////////////////// \n\n\n");
  console.log("json body", req.body);

  const event = processString(req.body.hook_code);
  const distinctId = processDistinctId(req.body);
  const result = processProperties(req.body, "");

  console.log("processed result :", result, "\n");
  console.log("end result \n\n\n ///////////////////////////////// \n\n\n");

  captureEvent(distinctId, res, next, event, result);
}
