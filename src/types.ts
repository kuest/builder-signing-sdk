
export enum BuilderType {
    UNAVAILABLE = "UNAVAILABLE",
    LOCAL = "LOCAL",
    REMOTE = "REMOTE",
}

export interface BuilderApiKeyCreds {
    key: string;
    secret: string;
    passphrase: string;
}

export interface RemoteBuilderConfig {
    url: string;
    token?: string; // Optional authorization token
}

export interface RemoteSignerPayload {
    method: string,
    path: string,
    body?: string,
    timestamp?: number,
}

export interface BuilderHeaderPayload {
    KUEST_BUILDER_API_KEY: string;
    KUEST_BUILDER_TIMESTAMP: string;
    KUEST_BUILDER_PASSPHRASE: string;
    KUEST_BUILDER_SIGNATURE: string;
    [key: string]: string;
}

