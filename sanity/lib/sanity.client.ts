import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const useCdn =  process.env.NODE_ENV === "production"

export const client = createClient({
    projectId, 
    dataset, 
    apiVersion, 
    useCdn: false,
    perspective: 'published',
    stega: {
        enabled: false,
        studioUrl: '/studio'
    }
})

