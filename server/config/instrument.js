// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as  Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://f897598148389f33c058308d9a18f0b6@o4512004588568576.ingest.de.sentry.io/4512004593614928",
  dataCollection: {
    integrations: [
        Sentry.mongooseIntegration()
    ],
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});