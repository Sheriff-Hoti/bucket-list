// package: org.example
// file: BucketService.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as BucketService_pb from "./BucketService_pb";

interface IBucketServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createBucket: IBucketServiceService_IcreateBucket;
}

interface IBucketServiceService_IcreateBucket extends grpc.MethodDefinition<BucketService_pb.BucketRequest, BucketService_pb.BucketResponse> {
    path: "/org.example.BucketService/createBucket";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<BucketService_pb.BucketRequest>;
    requestDeserialize: grpc.deserialize<BucketService_pb.BucketRequest>;
    responseSerialize: grpc.serialize<BucketService_pb.BucketResponse>;
    responseDeserialize: grpc.deserialize<BucketService_pb.BucketResponse>;
}

export const BucketServiceService: IBucketServiceService;

export interface IBucketServiceServer extends grpc.UntypedServiceImplementation {
    createBucket: grpc.handleUnaryCall<BucketService_pb.BucketRequest, BucketService_pb.BucketResponse>;
}

export interface IBucketServiceClient {
    createBucket(request: BucketService_pb.BucketRequest, callback: (error: grpc.ServiceError | null, response: BucketService_pb.BucketResponse) => void): grpc.ClientUnaryCall;
    createBucket(request: BucketService_pb.BucketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: BucketService_pb.BucketResponse) => void): grpc.ClientUnaryCall;
    createBucket(request: BucketService_pb.BucketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: BucketService_pb.BucketResponse) => void): grpc.ClientUnaryCall;
}

export class BucketServiceClient extends grpc.Client implements IBucketServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createBucket(request: BucketService_pb.BucketRequest, callback: (error: grpc.ServiceError | null, response: BucketService_pb.BucketResponse) => void): grpc.ClientUnaryCall;
    public createBucket(request: BucketService_pb.BucketRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: BucketService_pb.BucketResponse) => void): grpc.ClientUnaryCall;
    public createBucket(request: BucketService_pb.BucketRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: BucketService_pb.BucketResponse) => void): grpc.ClientUnaryCall;
}
