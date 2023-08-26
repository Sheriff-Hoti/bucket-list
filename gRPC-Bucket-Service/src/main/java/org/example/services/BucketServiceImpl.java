package org.example.services;

import io.grpc.stub.StreamObserver;
import org.example.BucketRequest;
import org.example.BucketResponse;
import org.example.BucketServiceGrpc;

public class BucketServiceImpl extends BucketServiceGrpc.BucketServiceImplBase {
    @Override
    public void createBucket(BucketRequest request, StreamObserver<BucketResponse> responseObserver) {
        System.out.println(request);
        responseObserver.onNext(
                BucketResponse.newBuilder()
                        .setName(request.getName())
                        .setDescription(request.getDescription())
                        .build()
        );

        responseObserver.onCompleted();
    }
}
