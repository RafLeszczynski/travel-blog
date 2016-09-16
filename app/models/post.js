import { belongsTo } from 'ember-data/relationships';
import PostModel from 'ember-wordpress/models/post';

export default PostModel.extend({
  author: belongsTo('user')
});
