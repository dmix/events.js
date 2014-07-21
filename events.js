// Cross-browser events
/* globals Event */
;(function () {
  'use strict';

  // Cross-browser event dispatcher
  // From https://gist.github.com/dciccale/6226151
  window.triggerEvent = function (target, type, doc, event) {
    doc = document;
    if (doc.createEvent) {
      event = new Event(type);
      target.dispatchEvent(event);
    } else {
      event = doc.createEventObject();
      target.fireEvent('on' + type, event);
    }
  };

  // Cross-browser event listener 
  // From http://ejohn.org/projects/flexible-javascript-events/
  window.addEvent = function (obj, type, fn) {
    if (obj.attachEvent) {
      obj['e'+type+fn] = fn;
      obj[type+fn] = function() { 
        obj['e'+type+fn](window.event); 
      };
      obj.attachEvent('on' + type, obj[type+fn]);
    } else {
      obj.addEventListener(type, fn, false);
    }
  };

  // CustomEvent polyfill from MDN
  // From https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
  function CustomEvent (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = window.CustomEvent || CustomEvent;
})();
