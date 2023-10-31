import { PostHog } from 'posthog-node'

export const posthog = new PostHog(
    'phc_4qUQk4nPZUKdy7OH0Zt7Gd4AH7CdwCcrJzed82Dnvpv',
    
{ host: 'https://analytics.marketing.whgi.net' } 
)

await posthog.shutdownAsync() 
