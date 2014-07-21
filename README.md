# Events.js
---

Cross-browser support, without requiring jQuery, supporting:

- Triggering events via https://gist.github.com/dciccale/6226151
- Adding event listeners via
  http://ejohn.org/projects/flexible-javascript-events/
- Creating CustomEvent via
  https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent

This is to create a consistent interface so events work with IE8. IE9+
supports the modern event system and once support for IE8 drops it will 
make this polyfill irrelevant.
