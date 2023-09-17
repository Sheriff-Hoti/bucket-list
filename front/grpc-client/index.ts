import {BucketServiceClient} from '@protogen/proto/BucketService_grpc_pb'
import {BucketRequest} from '@protogen/proto/BucketService_pb'
import {credentials} from '@grpc/grpc-js'

export const grpcClient = new BucketServiceClient('localhost:8080', credentials.createInsecure());
const req = new BucketRequest()
    .setName('hi')
    .setDescription('hello');

export const testing = () => grpcClient.createBucket(req, (error, response) => {
    if (error) {
        console.error(error);
    }

    console.info(response);
})