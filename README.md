# Kuest Builder Signing SDK

A TypeScript SDK for creating authenticated builder headers


## Installation

```bash
pnpm install @kuest/builder-signing-sdk
```

## Quick Start

```typescript
import { BuilderConfig } from '@kuest/builder-signing-sdk';

// Create a builder config for signing

// Local
const builderConfig = new BuilderConfig(
  {
    localBuilderCreds: {
      key: "xxxxxxx-xxx-xxxx-xxx-xxxxxxxxx",
      secret: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
      passphrase: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },
  },
);

const headers = await builderConfig.generateBuilderHeaders(
  'POST'                  // HTTP method
  '/order',               // API endpoint path
  '{"marketId": "0x123"}' // Request body
);

// Remote
const builderConfig = new BuilderConfig(
  {
    remoteBuilderConfig: {
      url: remoteSignerUrl,
      token: `${process.env.MY_AUTH_TOKEN}`
    }
  },
);

const headers = await builderConfig.generateBuilderHeaders(
  'POST'                  // HTTP method
  '/order',               // API endpoint path
  '{"marketId": "0x123"}' // Request body
);
```
