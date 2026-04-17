import { buildHmacSignature } from "./signing/index.js";
import { BuilderApiKeyCreds, BuilderHeaderPayload } from "./types.js";


export class BuilderSigner {
    readonly creds: BuilderApiKeyCreds;

    constructor(creds: BuilderApiKeyCreds) {
        this.creds = creds;
    }

    public createBuilderHeaderPayload(
        method: string,
        path: string,
        body?: string,
        timestamp?: number,
    ): BuilderHeaderPayload {
        let ts = Math.floor(Date.now() / 1000);
        if (timestamp !== undefined) {
            ts = timestamp;
        }

        const builderSig = buildHmacSignature(
            this.creds.secret,
            ts,
            method,
            path,
            body,
        );

        return {
            KUEST_BUILDER_API_KEY: this.creds.key,
            KUEST_BUILDER_PASSPHRASE: this.creds.passphrase,
            KUEST_BUILDER_SIGNATURE: builderSig,
            KUEST_BUILDER_TIMESTAMP: `${ts}`,
        }
    }
}
