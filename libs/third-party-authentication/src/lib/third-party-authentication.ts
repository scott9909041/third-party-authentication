import { AuthConfig, Authenticator } from "./auth.model";

export const init = (authConfig: AuthConfig): Authenticator => ((config: AuthConfig) => {

  const { line: lineConfig } = config;

  return {
    test: () => console.log('Hello', lineConfig.name),
  }

}) (authConfig)