import Ember from 'ember';

export default Ember.Component.extend({

didRender() {
   
         $.getScript('after-page-load.js');
   }

});
