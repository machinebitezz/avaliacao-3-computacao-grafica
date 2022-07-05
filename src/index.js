import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const loader = new GLTFLoader()

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.querySelector('#app').appendChild( renderer.domElement )

let shiba
loader.load('./models/shiba/scene.gltf', gltf => {
  shiba = gltf.scene
  scene.add(shiba)
}, undefined, error => {
  console.error(error)
})

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate )
  shiba.rotation.y += 0.01
  // shiba.rotation.z += 0.01
	renderer.render( scene, camera )
}
animate()