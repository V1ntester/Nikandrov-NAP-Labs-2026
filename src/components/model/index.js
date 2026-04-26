import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class ModelComponent {
  constructor(parent) {
    this.parent = parent;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;

    this._resizeHandler = null;
    this._container = null;
  }

  init(container) {
    this._container = container;

    const w = container.clientWidth;
    const h = container.clientHeight;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);

    this.camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    this.camera.position.set(0, 1, 2);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);

    this.scene.add(new THREE.AmbientLight(0xffffff, 1));

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(3, 5, 2);
    this.scene.add(light);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;

    this.controls.enableRotate = false;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;

    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 2;

    this._resizeHandler = () => this.resize();
    window.addEventListener("resize", this._resizeHandler);
  }

  resize() {
    if (!this._container || !this.renderer || !this.camera) return;

    const w = this._container.clientWidth;
    const h = this._container.clientHeight;

    if (w === 0 || h === 0) return;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(w, h);
  }

  load(url) {
    const loader = new GLTFLoader();

    loader.load(url, (gltf) => {
      const model = gltf.scene;

      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);

      const size = box.getSize(new THREE.Vector3()).length();
      const scale = 2 / size;
      model.scale.setScalar(scale);

      this.scene.add(model);
      this.animate();
    });
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    if (this.controls) this.controls.update();

    this.renderer.render(this.scene, this.camera);
  };

  render(url) {
    const container = document.createElement("div");
    container.style.width = "100%";
    container.style.height = "400px";

    this.parent.appendChild(container);

    this.init(container);
    this.load(url);
  }

  destroy() {
    window.removeEventListener("resize", this._resizeHandler);

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.domElement.remove();
    }

    if (this.controls) {
      this.controls.dispose();
    }

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
  }
}