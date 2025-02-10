#!/bin/bash

# Fetch the current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Vercel Deployment Hooks
STAGING_HOOK="https://api.vercel.com/v1/integrations/deploy/prj_LwTioxQluhVclHaPEHgfqLZEOmdo/NawFP5WDjG"
PRODUCTION_HOOK="https://api.vercel.com/v1/integrations/deploy/prj_LwTioxQluhVclHaPEHgfqLZEOmdo/DFBwbTv0kB"

if [[ "$BRANCH" == "main" ]]; then
  echo "Triggering production deployment..."
  curl -X POST $PRODUCTION_HOOK
else
  echo "Triggering staging deployment for branch: $BRANCH"
  curl -X POST $STAGING_HOOK
fi
