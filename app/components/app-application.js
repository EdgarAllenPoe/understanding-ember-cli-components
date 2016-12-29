import Ember from 'ember';

export default Ember.Component.extend({

didRender() {
   
         console.log('I just came from a component');
         $.getScript('after-page-load.js');
   }

});
