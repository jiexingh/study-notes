/*
 * @Autor: jiexingh
 * @Date: 2020-10-12 07:44:15
 * @LastEditors: jiexingh
 * @LastEditTime: 2020-10-12 08:23:42
 */
class App {
    constructor(canvas, model, animations) {
        this.scence = App.createScence()
            .add(model)
            .add(App.createAmbientLight())
            .add(App.createDirectionLight())
        this.camera = App.createCamera();
        this.render = App.createRenderer(canvas);
        this.update();
    }
    /**
     * 添加背景
     */
    static createScence() {
        let scence = new THREE.Scence();
        scence.background = new THREE.color(0x33495);
    }
    /**
     * 添加场景光
     */
    static createAmbientLight() {
        return new THREE.ambientLight(0xffffff, 1)
    }
    /**
     * 添加光照 颜色 强度 方向
     */
    static createDirectionLight() {
        let light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(0, 400, 350);
        return light;
    }

    static createCamera() {
        let camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000);
        camera.position.z = 10;
        camera.position.x = 0;
        camera.position.y = -3;
    }
    /**
     * 创建渲染器
     * @param {} canvas 
     */
    static createRenderer(canvas) {
        let renderer = new THREE.WebGLRenderer({
            canvas
        });
        renderer.setPixelRation(Window.devicePixelRatio);
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = 2.0;
        return renderer;
    }
    update() {
        this.resize();
        this.renderer.render(this.scence, this.camera);
        window.requestAnimationFrame(() => {
            this.update();
        })
    }
    //   窗口改变函数
    resize() {

    }

}

let loader = new THREE.GLTFloader();
loader.load('',
    function (gltf) {
        let model = gltf
    })