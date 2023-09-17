import {publicProcedure, router} from "./trpc";
import connectToDatabase from '@db/connectDB'
import Bucket from "@db/scheemas/Bucket";
import z from 'zod'
import {testing} from "@grpc-client";

export const appRouter = router({
    getBuckets: publicProcedure.query(async () => {
        const connection = await connectToDatabase()
        // testing()
        return Bucket.find();

    }),
    addBucket: publicProcedure.input(z.string()).mutation(async (opts) => {

        const bucket = new Bucket({name: opts.input});
        return await bucket.save();
    })
});

export type AppRouter = typeof appRouter;