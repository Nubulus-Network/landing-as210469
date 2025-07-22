import { defineCollection, z } from 'astro:content';

const networkCollection = defineCollection({
  type: 'content',
  schema: z.object({
    networkName: z.string(),
    organisationName: z.string(),
    website: z.string().url(),
    asn: z.string(),
    asSet: z.string(),
    ipv4Prefixes: z.number(),
    ipv6Prefixes: z.number(),
    traffic: z.string(),
    trafficRatio: z.string(),
    scope: z.string(),
    infoTypes: z.array(z.string()),
    ixCount: z.number(),
    facCount: z.number(),
    description: z.string(),
  })
});

const contactsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    peering: z.string().email(),
    general: z.string().email(),
    abuse: z.string().email(),
    telegram: z.string(),
  })
});

const policiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    general: z.string(),
    locations: z.string(),
    contracts: z.string(),
    unicast: z.boolean(),
    multicast: z.boolean(),
    ipv6: z.boolean(),
    routeServers: z.boolean(),
  })
});

export const collections = {
  'network': networkCollection,
  'contacts': contactsCollection,
  'policies': policiesCollection,
};
