import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  emailAddress: '',
  userMsg: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  isMinMsg: Ember.computed.gte('userMsg.length', 5),
  isValidMsg: Ember.computed.and('isValid', 'isMinMsg'),
  isNotValidMsg: Ember.computed.not('isValidMsg'),

  actions: {
    saveInvitation() {
      alert(`Saving the following email address: ${this.get('emailAddress')}`);
      this.set(`responseMessage`, `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set(`emailAddress`, '');
    },

    sendMessage() {
      alert(`Saving the message from email address: ${this.get('emailAddress')}`);
      this.set(`responseMessage`, `Thank you! ${this.get('emailAddress')}, we have received your message!`);
      this.set(`emailAddress`, '');
      this.set(`userMsg`, '');
    }
  }

});
