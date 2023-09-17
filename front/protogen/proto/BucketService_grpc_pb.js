// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var BucketService_pb = require('./BucketService_pb.js');

function serialize_org_example_BucketRequest(arg) {
  if (!(arg instanceof BucketService_pb.BucketRequest)) {
    throw new Error('Expected argument of type org.example.BucketRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_example_BucketRequest(buffer_arg) {
  return BucketService_pb.BucketRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_org_example_BucketResponse(arg) {
  if (!(arg instanceof BucketService_pb.BucketResponse)) {
    throw new Error('Expected argument of type org.example.BucketResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_org_example_BucketResponse(buffer_arg) {
  return BucketService_pb.BucketResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BucketServiceService = exports.BucketServiceService = {
  createBucket: {
    path: '/org.example.BucketService/createBucket',
    requestStream: false,
    responseStream: false,
    requestType: BucketService_pb.BucketRequest,
    responseType: BucketService_pb.BucketResponse,
    requestSerialize: serialize_org_example_BucketRequest,
    requestDeserialize: deserialize_org_example_BucketRequest,
    responseSerialize: serialize_org_example_BucketResponse,
    responseDeserialize: deserialize_org_example_BucketResponse,
  },
};

exports.BucketServiceClient = grpc.makeGenericClientConstructor(BucketServiceService);
