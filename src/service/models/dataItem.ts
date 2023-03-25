import type { DataItemSchema as DataItemType } from '@/types/mongoSchema';
import { Schema, model, models, Model } from 'mongoose';

const DataItemSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  dataId: {
    type: Schema.Types.ObjectId,
    ref: 'data',
    required: true
  },
  times: {
    type: Number,
    default: 3
  },
  text: {
    type: String,
    required: true
  },
  temperature: {
    type: Number,
    required: true
  },
  rawResponse: {
    type: [String],
    default: ''
  },
  result: {
    type: [
      {
        q: {
          type: String,
          required: true
        },
        a: {
          type: String,
          required: true
        }
      }
    ],
    default: []
  },
  status: {
    // 0-闲置，1-待生成，2-生成中
    type: Number,
    default: 1
  }
});

export const DataItem: Model<DataItemType> =
  models['dataItem'] || model('dataItem', DataItemSchema);