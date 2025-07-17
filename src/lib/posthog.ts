import posthog from 'posthog-js'

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init('phx_IKg06tknSc9PATST6aTCUW2qEnsyeYEOubTAU4gojSbizZ0', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false, // We'll manually capture pageviews
      capture_pageleave: true,
    })
  }
}

export { posthog }