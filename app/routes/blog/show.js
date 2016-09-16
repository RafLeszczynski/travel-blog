import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    return this.store.query('post', { filter: { name: params.slug } }).then(posts => posts.get('firstObject'));
  }
});
