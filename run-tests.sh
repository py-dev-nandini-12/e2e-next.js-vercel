#!/bin/bash

DEPLOYMENT_URL=$1

if [[ -z "$DEPLOYMENT_URL" ]]; then
  echo "❌ Error: Deployment URL is missing!"
  exit 1
fi

echo "🚀 Running E2E Tests on $DEPLOYMENT_URL..."

# Install Dependencies
npm install -g pnpm
pnpm install
pnpm playwright install

# Run Playwright Tests
BASE_URL=$DEPLOYMENT_URL pnpm playwright test
TEST_RESULT=$?

if [[ $TEST_RESULT -ne 0 ]]; then
  echo "❌ E2E Tests Failed!"
  exit 1
else
  echo "✅ E2E Tests Passed!"
  exit 0
fi
