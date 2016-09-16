import Ember from 'ember';

const { Helper: { helper } } = Ember;

export function saveHtml(params) {
  return Ember.String.htmlSafe(params[0]);
}

export default helper(saveHtml);
