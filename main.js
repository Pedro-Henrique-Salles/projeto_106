//https://images.vexels.com/media/users/3/230516/isolated/preview/10174349f0f6d938d5ecaba3264b048c-plano-de-passaro-voando.png
//https://static.vecteezy.com/system/resources/previews/022/718/881/non_2x/cartoon-cute-dog-ai-generative-free-png.png
//https://static.wixstatic.com/media/3c0d1c_d3adb9553e0340fea37798a41331ef00~mv2.png/v1/fill/w_440,h_494,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Gato-PNG.png
function startClassification() {
    classificadora=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Q-KqvsFS-/model.json", modelLoaded);
}

function modelReady(){
    classifier.classify(resultados_obtidos);
}

function gotResults(error,results){

}