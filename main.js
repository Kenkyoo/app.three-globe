import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import './style.css'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 100 ); 

const texture = new THREE.TextureLoader().load( "/texture.jpg" );

const material = new THREE.MeshBasicMaterial( { map: texture } );
const geometry = new THREE.SphereGeometry(1, 32, 16);

const mesh = new THREE.Mesh( geometry, material );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

scene.add( mesh );

camera.position.z = 15;

const path = './background/';
const format = '.png';
const urls = [
  path + 'px' + format, path + 'nx' + format,
  path + 'py' + format, path + 'ny' + format,
  path + 'pz' + format, path + 'nz' + format
];

const textureCube = new THREE.CubeTextureLoader().load( urls );

scene.background = textureCube;

function animate() {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  camera.rotation.y += 0.001; // Ajusta la velocidad aquí
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );


const controls = new OrbitControls( camera, renderer.domElement ); 