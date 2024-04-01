
let noPlanes = 0;
let planeDesign = "";
let buyButton = document.querySelector('.buyplane__btn');
let planes = document.querySelector('.luft-planes');

const addPlanes = function () {
    noPlanes++;
    planeDesign += "✈";
    planes.textContent = planeDesign;
}


buyButton.addEventListener("click", addPlanes);