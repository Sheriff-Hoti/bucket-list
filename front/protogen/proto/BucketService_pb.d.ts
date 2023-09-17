// package: org.example
// file: BucketService.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BucketRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): BucketRequest;
    getDescription(): string;
    setDescription(value: string): BucketRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BucketRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BucketRequest): BucketRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BucketRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BucketRequest;
    static deserializeBinaryFromReader(message: BucketRequest, reader: jspb.BinaryReader): BucketRequest;
}

export namespace BucketRequest {
    export type AsObject = {
        name: string,
        description: string,
    }
}

export class BucketResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): BucketResponse;
    getDescription(): string;
    setDescription(value: string): BucketResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BucketResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BucketResponse): BucketResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BucketResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BucketResponse;
    static deserializeBinaryFromReader(message: BucketResponse, reader: jspb.BinaryReader): BucketResponse;
}

export namespace BucketResponse {
    export type AsObject = {
        name: string,
        description: string,
    }
}
