module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
      data:{
        allowedFileds:['firstName','lastName','phoneNumber','gender','city','country','zipCode','streetAddress','guest','avatar','streetAddress2','state']
      },
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },

   "drag-drop-content-types": {
    enabled: true
  },

  stripe: {
  config:{
    enabled: true,
    api_Key: env("STRIPE_API_KEY"),
    api_secret:env("STRIPE_SECRET_KEY"),
    webhookSecret: env("STRIPE_WEBHOOK_SECRET"),
  }},

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "leewardslope"),
        api_key: env("CLOUDINARY_KEY", "783694461985968"),
        api_secret: env("CLOUDINARY_SECRET", "S0-Evp6iezzQU8jaLjqhYcqpXJg"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "akhil@contentql.io",
        defaultReplyTo: "akhil@contentql.io",
      },
    },
  },

  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
      hooks: {
        preResponseTransform: (ctx) =>
          console.log("hello from the preResponseTransform hook!"),
        postResponseTransform: (ctx) =>
          console.log("hello from the postResponseTransform hook!"),
      },
      // contentTypeFilter: {
      //   mode: 'allow',
      //   uids: {
      //     'api::article.article': true,
      //     'api::category.category': {
      //       'GET':true,
      //     }
      //   }
      // },
      plugins: {
        ids: {
          slugify: true,
        },
      },
    },
  },
});
