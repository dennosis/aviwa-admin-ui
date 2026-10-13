const getEnvVar = (key: string, fallback?: string): string => {
  const value = import.meta.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

//TODO: incluir mais
export const environment = {
  apiUrl: getEnvVar("VITE_API_URL"),
  googleClientId: getEnvVar("VITE_GOOGLE_CLIENT_ID"),
} as const;

export type Environment = typeof environment;
