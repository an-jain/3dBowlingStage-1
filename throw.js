AFRAME.registerComponent("bowling-balls", {
  init: function () {
    this.throwBall();
  },
  throwBall: function () {
    window.addEventListener("keydown", (e) => {
      if(e.key === "z") {
         var balls = document.createElement("a-entity")
         balls.setAttribute("gltf-model", "./models/bowling_ball/scene.gltf")
         balls.setAttribute("scale", {x:3, y:3, z:3})
         var cam = document.querySelector("#camera")
         pos = cam.getAttribute("position")
         balls.setAttribute("position", {
          x:pos.x,
          y:pos.y-1.2,
          z:pos.z
         })
         var camera = document.querySelector("#camera").object3D
         var direction = new THREE.Vector3()
         camera.getWorldDirection(direction)
         balls.setAttribute("velocity", direction.multiplyScalar(-10))
         var scene = document.querySelector("#scene")
         scene.appendChild(balls)
  }

});
  }
})