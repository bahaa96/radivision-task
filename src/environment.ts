interface IEnvVars {
  API_URL: string;
  API_KEY: string;
  CDN_URL: string;
}

const base = {
  API_KEY: process.env.REACT_APP_API_KEY,
  API_URL: process.env.REACT_APP_API_URL,
  CDN_URL: process.env.REACT_APP_CDN_URL,
};

const ENV = {
  dev: {
    ...base,
  },
  staging: {
    ...base,
  },
  prod: {
    ...base,
  },
};

const getEnvVars = (env = 'dev'): IEnvVars | Record<string, unknown> => {
  if (env === 'staging') {
    return ENV.staging;
  }
  if (env === 'prod') {
    return ENV.prod;
  }

  return ENV.dev;
};

export default getEnvVars;
