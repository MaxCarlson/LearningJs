//prompts for radius of circle then calcualtes area

var pirsqrd = function(){
    var radius = prompt("what is the radius?");
    var area = Math.PI*(radius*radius);
    console.log(area); //or return area;
};
pirsqrd();