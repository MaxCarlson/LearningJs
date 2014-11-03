//prompts for radius of circle then calcualtes area

var pirsqrd = function(){
    var radius = prompt("what is the radius?");
    var area = 3.14159*(radius*radius);
    console.log(area); //or return area;
};
pirsqrd();