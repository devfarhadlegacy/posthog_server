import { PostHog } from 'posthog-node'

const posthog = new PostHog(
    'phc_4qUQk4nPZUKdy7OH0Zt7Gd4AH7CdwCcrJzed82Dnvpv',
    
{ host: 'https://analytics.marketing.whgi.net' } 
)

export default posthog;

// await client.shutdownAsync() 
