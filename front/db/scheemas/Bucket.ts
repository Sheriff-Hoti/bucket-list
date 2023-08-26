import {Schema, model, models,Document} from 'mongoose';

interface IBucket extends Document{
    name: string
}

const BucketSchema = new Schema<IBucket>({
    name: {
        type: String,
        required: true,
    },

});

const BucketModel = models.Bucket || model<IBucket>('Bucket', BucketSchema);

export default BucketModel;
