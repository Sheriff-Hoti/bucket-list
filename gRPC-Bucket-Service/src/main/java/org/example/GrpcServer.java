package org.example;

import io.grpc.Server;
import io.grpc.ServerBuilder;
import org.example.services.BucketServiceImpl;

import java.io.IOException;

/**
 * Hello world!
 */
public class GrpcServer {
    public static void main(String[] args) throws IOException, InterruptedException {
        System.out.println("Starting the server...");
        Server server = ServerBuilder.forPort(8080)
                .addService(new BucketServiceImpl())
                .build();

        server.start();
        System.out.println("Server started!");

        server.awaitTermination();
    }
}
