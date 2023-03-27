var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Resolver } from "did-resolver";
//import { registerDID } from "@ayanworks/polygon-did-registrar";
import { getResolver } from '@ayanworks/polygon-did-resolver';
//import { updateDidDoc } from "@ayanworks/polygon-did-registrar";
//import { deleteDidDoc } from "@ayanworks/polygon-did-registrar";
//import { Did, DidConfig } from "./did.js";
//import { chainData } from "../data/chains.js";
//import { UnsupportedDidMethodError } from "./unsupportedDidMethodError.js"
/*
class PolyDid extends Did {

    constructor(conf: DidConfig) {
        if (!conf.chain) {
            throw new Error("Chain name not provided");
        }
        super(conf);
    }

    public createDid(): string {
        return `did:${chainData[this.chain!].method}:${this.address}`;
    }

    public async registerDid(): Promise<any> {
        
      if (!this.did) {
        console.warn('DID not initialized');
        return;
      }

      try {
          const txHash = await registerDID(this.did, this.privateKey);
          if (!txHash || !txHash["success"]) {
              throw new Error('Failed to create DID');
          }
          return txHash;
      } catch (error) {
        if(error == "Error: The DID document already registered!") {
            console.warn("DID already registered");
            return "DID already registered";
        }
        console.log("Error: ", JSON.stringify(error));
        throw error;
      }
    }

    public async resolveDid(): Promise<any> {
        if (!this.did) {
            console.warn("DID not initialized");
            return;
        }
        return await resolveDid(this.did);
    }

    public async updateDid(didDoc: string): Promise<any> {
        if (!this.did) {
            console.warn('DID not initialized');
            return;
        } else if (this.didDoc === didDoc) {
            console.warn('DID document is same as the one already present');
            return;
        } else if (this.didDoc) {
            console.warn('DID document already exists. Overwriting');
            this.didDoc = didDoc;
        }

        try {
            const txHash = await updateDidDoc(this.did, didDoc, this.privateKey);
            if (!txHash || !txHash["success"]) {
                throw new Error('Failed to update DID');
            }
            return txHash;
        } catch (error) {
            throw error;
        }
    }

    public async deleteDid(): Promise<any> {
        if (!this.did) {
            console.warn('DID not initialized');
            return;
        } else if (!this.didDoc) {
            console.warn('DID document not initialized');
            return;
        }

        try {
            const txHash = await deleteDidDoc(this.did, this.privateKey);
            if (!txHash || !txHash["success"]) {
                throw new Error('Failed to delete DID');
            }
            return txHash;
        } catch (error) {
            throw error;
        }
    }
}
*/
function resolveDid(did) {
    return __awaiter(this, void 0, void 0, function* () {
        /*
            if ((!did.startsWith(`did:${chainData['polygon-mumbai' ].method}:`)) &&
                (!did.startsWith(`did:${chainData['polygon-mainnet'].method}:`)) ) {
                //throw new UnsupportedDidMethodError("did method is not did:polygon:");
                console.log("did method is not did:polygon:");
            }
        */
        const polyResolver = getResolver();
        const resolver = new Resolver(polyResolver);
        try {
            const didResolutionResult = yield resolver.resolve(did);
            if (!didResolutionResult) {
                throw new Error('Failed to resolve DID');
            }
            return didResolutionResult;
        }
        catch (error) {
            throw error;
        }
    });
}
export { /*PolyDid,*/ resolveDid };
//# sourceMappingURL=poly-did.js.map