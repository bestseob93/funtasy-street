import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Music = new Schema({
  track: String,
  artist: String,
  album_url: String,
  player: {type: Schema.Types.ObjectId, ref: 'account'}
});

export default mongoose.model('music', Music);
