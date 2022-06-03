export interface AuthConfig {
    line:LineConfig
}

export interface LineConfig {
    name: string;
}

export interface Authenticator {
    test: () => void;
}