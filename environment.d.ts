declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      NEXT_PUBLIC_DRUPAL_BASE_URL: string;
      NEXT_IMAGE_DOMAIN: string;
      DRUPAL_SITE_ID: string;
      DRUPAL_FRONT_PAGE: string;
      DRUPAL_PREVIEW_SECRET: string;
      DRUPAL_CLIENT_ID: string;
      DRUPAL_CLIENT_SECRET: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
