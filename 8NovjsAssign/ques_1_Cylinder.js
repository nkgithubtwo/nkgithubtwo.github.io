
const cylinder = {
    height : 5,
    radius : 10,

    func : function(){
       let vol = (3.14*this.radius*this.radius*this.height);
       console.log("volume of given Cylinder : " +vol);

       let curvedArea = 2*3.14*this.radius*this.height;
       console.log("Curved surface Area of Cylinder : " + curvedArea);

       let totalArea = 2*3.14*this.radius*(this.height + this.radius);
       console.log("Total surface Area of Cylinder : " + totalArea);
    }
       
    
};

cylinder.func();