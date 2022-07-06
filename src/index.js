import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 2000 )
const modelLoader = new GLTFLoader()
const textureLoader = new THREE.TextureLoader()

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize( window.innerWidth, window.innerHeight )
document.querySelector('#app').appendChild( renderer.domElement )
renderer.shadowMap.enabled = true
const controls = new OrbitControls(camera, renderer.domElement)

const light = new THREE.PointLight(0xffffff, 1.3)
light.castShadow = true
// const helper = new THREE.PointLightHelper(light)

light.position.y = 100

scene.add(light)
// scene.add(helper)

const ambient = new THREE.AmbientLight(0x888888)
scene.add(ambient)

const cylinderG = new THREE.CylinderGeometry(500, 500, 5, 25)
const cylinderT = textureLoader.load('./textures/2_sea water texture-seamless.jpg')
cylinderT.wrapS = cylinderT.wrapT = THREE.RepeatWrapping
cylinderT.repeat = new THREE.Vector2(20, 20)
const cylinderM = new THREE.MeshPhongMaterial({map: cylinderT})
const cylinder = new THREE.Mesh(cylinderG, cylinderM)
cylinder.receiveShadow = true
cylinder.position.y = 0
scene.add(cylinder)

const skyboxG = new THREE.SphereGeometry( 1000, 32, 16 );
const skyboxT = textureLoader.load('./textures/sky_seamless_texture_5888.jpg')
skyboxT.wrapS = skyboxT.wrapT = THREE.RepeatWrapping
skyboxT.repeat = new THREE.Vector2(5, 5)
const skyboxM = new THREE.MeshBasicMaterial({map: skyboxT, side: THREE.BackSide})
const skybox = new THREE.Mesh(skyboxG, skyboxM)
scene.add(skybox)

let shiba
modelLoader.load('./models/shiba/scene.gltf', gltf => {
  shiba = gltf.scene
  shiba.traverse((o) => {
    if (o.isMesh) {
      const texture = o.material.map
      o.material = new THREE.MeshPhongMaterial({map: texture})
      o.castShadow = true
      o.receiveShadow = true
    }
  })
  shiba.scale.set(2.5, 2.5, 2.5)
  shiba.position.set(4, 10.5, -40.9)
  shiba.rotation.y = Math.PI*1.9
  scene.add(shiba)
}, undefined, error => {
  console.error(error)
})

let the_mill
modelLoader.load('./models/the_mill/scene.gltf', gltf => {
  the_mill = gltf.scene
  scene.add(the_mill)
  the_mill.traverse((o) => {
    if (o.isMesh) {
      const texture = o.material.map
      o.material = new THREE.MeshPhongMaterial({map: texture})
      o.castShadow = true
      o.receiveShadow = true
    }
  })
  the_mill.scale.set(10, 10, 10)
  the_mill.position.y = 6.9
  the_mill.position.z = -50
}, undefined, error => {
  console.error(error)
})

let boat_lowpoly
const BOATROTATION = 0.4
modelLoader.load('./models/boat_lowpoly/scene.gltf', gltf => {
  boat_lowpoly = gltf.scene
  scene.add(boat_lowpoly)
  boat_lowpoly.traverse((o) => {
    if (o.isMesh) {
      const texture = o.material.map
      o.material = new THREE.MeshPhongMaterial({map: texture})
      o.castShadow = true
      o.receiveShadow = true
    }
  })
  boat_lowpoly.scale.set(0.05, 0.05, 0.05)
  boat_lowpoly.position.set(-43, -1.1, -44)
  boat_lowpoly.rotation.y = BOATROTATION
}, undefined, error => {
  console.error(error)
})

let the_lighthouse
modelLoader.load('./models/the_lighthouse/scene.gltf', gltf => {
  the_lighthouse = gltf.scene
  scene.add(the_lighthouse)
  the_lighthouse.traverse((o) => {
    if (o.isMesh) {
      const texture = o.material.map
      o.material = new THREE.MeshPhongMaterial({map: texture})
      o.castShadow = true
      o.receiveShadow = true
    }
  })
  the_lighthouse.scale.set(150, 150, 150)
  the_lighthouse.position.set(50, 2.3, 0)
  the_lighthouse.rotation.y = Math.PI * 0.50
}, undefined, error => {
  console.error(error)
})

let origami_water_lilies
const LILIESHEIGHT = 2.5
modelLoader.load('./models/origami_water_lilies/scene.gltf', gltf => {
  origami_water_lilies = gltf.scene
  scene.add(origami_water_lilies)
  origami_water_lilies.traverse((o) => {
    if (o.isMesh) {
      const texture = o.material.map
      o.material = new THREE.MeshPhongMaterial({map: texture})
      o.receiveShadow = true
    }
  })
  origami_water_lilies.scale.set(2, 2, 2)
  origami_water_lilies.position.set(-50, LILIESHEIGHT, -10)
}, undefined, error => {
  console.error(error)
})

let patch_of_heaven_the_white_tree
modelLoader.load('./models/patch_of_heaven_the_white_tree/scene.glb', gltf => {
  patch_of_heaven_the_white_tree = gltf.scene
  scene.add(patch_of_heaven_the_white_tree)
  patch_of_heaven_the_white_tree.traverse((o) => {
    if (o.isMesh) {
      const texture = o.material.map
      o.material = new THREE.MeshPhongMaterial({map: texture})
      o.receiveShadow = true
      o.castShadow = true
    }
  })
  patch_of_heaven_the_white_tree.scale.set(0.1, 0.1, 0.1)
  patch_of_heaven_the_white_tree.position.set(-40, 0, 40)
  patch_of_heaven_the_white_tree.rotation.y = -Math.PI * 0.40
}, undefined, error => {
  console.error(error)
})

let sea_keep_lonely_watcher
modelLoader.load('./models/sea_keep_lonely_watcher/scene.gltf', gltf => {
  sea_keep_lonely_watcher = gltf.scene
  scene.add(sea_keep_lonely_watcher)
  sea_keep_lonely_watcher.traverse((o) => {
    if (o.isMesh) {
      const texture = o.material.map
      o.material = new THREE.MeshPhongMaterial({map: texture})
      o.castShadow = true
    }
  })
  sea_keep_lonely_watcher.scale.set(0.3, 0.3, 0.3)
  sea_keep_lonely_watcher.position.set(0, -15, 120)
  sea_keep_lonely_watcher.rotation.y = Math.PI * 0.3
}, undefined, error => {
  console.error(error)
})

camera.position.z = -150
camera.position.y = 100

let t = 0
function animate() {
  t += 0.01
	requestAnimationFrame( animate )
  boat_lowpoly.rotation.y = BOATROTATION + Math.sin(t) * 0.1
  boat_lowpoly.position.y = 0 + Math.sin(t) * 0.5
  cylinder.position.y = 0 + Math.sin(t) * 0.5
  cylinderT.offset = new THREE.Vector2(Math.sin(t*0.05)/2 + 0.5, 0)
  origami_water_lilies.position.y = LILIESHEIGHT + Math.sin(t) * 0.5
  skybox.rotation.x += 0.0002
  skybox.rotation.y += 0.0002
  skybox.rotation.z += 0.0002
  light.position.x = 50*Math.cos(t*0.1) + 0;
  light.position.z = 50*Math.sin(t*0.1) + 0;
	renderer.render( scene, camera )
  controls.update()
}
animate()