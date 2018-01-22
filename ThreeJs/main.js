function createScene(){
    return new THREE.Scene();
}

function createCamera(){
    //投影カメラ
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0,0,1000);

    return camera;
}

function createRenderer(){
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    return renderer;
}

function createPlane(){
    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;

    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;

    return plane;
}

var scene;
var camera;
var renderer;

function init(){

    scene = createScene();
    camera = createCamera();
    camera.lookAt(scene.position);
    renderer = createRenderer();


    //region Add Object
    const geometry = new THREE.SphereGeometry(300,30,30);
    const material = new THREE.MeshStandardMaterial({color: 0xFF0000});
    const cube = new THREE.Mesh(geometry,material);

    scene.add(cube);

    var axes = new THREE.AxisHelper(20);
    scene.add(axes);

    scene.add(createPlane());

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
    directionalLight.position.set(1,1,1);

    scene.add(directionalLight);
    //endregion

    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    renderScene();


    function renderScene(){
        //region main loop

        //endregion
        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
    }
}
window.onload = init;

var resizeTimer;
var interval = Math.floor(1000 / 60 * 10);

window.addEventListener("resize",function (event) {
    if(resizeTimer !== false){
        clearTimeout(resizeTimer);
    }
    resizeTimer = setTimeout(function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    },interval);

},false);

