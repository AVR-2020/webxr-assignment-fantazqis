AFRAME.registerComponent('start-button', {
    init: function () {
      let sceneEl = document.querySelector('a-scene');
      let el = this.el;
  
      el.addEventListener('click', function () {
        sceneEl.querySelectorAll('.orbits').forEach((function(element) {
              element.emit('startOrbit')
         }));
      });
    } 
  });