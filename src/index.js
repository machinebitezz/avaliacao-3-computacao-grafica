import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const modelLoader = new GLTFLoader()
const textureLoader = new THREE.TextureLoader()

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.querySelector('#app').appendChild( renderer.domElement )
renderer.shadowMap.enabled = true
const controls = new OrbitControls(camera, renderer.domElement)

const light = new THREE.PointLight(0xffffff)
const helper = new THREE.PointLightHelper(light)
light.castShadow = true

light.position.y = 5
light.position.z = 5

scene.add(light)
scene.add(helper)

const ambient = new THREE.AmbientLight(0x333333)
scene.add(ambient)

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
  shiba.position.z = 2.3
  shiba.position.x = -1.2
  shiba.position.y = -0.1
  shiba.scale.set(0.25, 0.25, 0.25)
  shiba.rotation.y = 3.14
  shiba.rotation.x = 0.3
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
}, undefined, error => {
  console.error(error)
})

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate )
	renderer.render( scene, camera )
}
animate()