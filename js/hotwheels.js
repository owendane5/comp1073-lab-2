const output = document.getElementById('output');

function Hotwheels(color, decal, productManufacturer, vehicleManufacturer, modelName, packageColor, productNumber, seriesName, seriesNumber) {
this.color = color;
this.decal = decal;
this.productManufacturer = productManufacturer;
this.vehicleManufacturer = vehicleManufacturer;
this.modelName = modelName;
this.packageColor = packageColor;
this.productNumber = productNumber;
this.seriesName = seriesName;
this.seriesNumber = seriesNumber;
this.describe = function() {
 let description = (`The color is ${this.color}, decal is ${this.decal}, product manufacturer is ${this.productManufacturer}, vehicle manufacturer is ${vehicleManufacturer}, model name is ${this.modelName} package color is ${this.packageColor}, product number is ${productNumber}, seris name is ${this.seriesName}, and series number is ${this.seriesNumber}.`);
}

}
output.textContent = hotWheels2.description; 

const hotWheels2 = new Hotwheels("grey", true, "fiat", "550", "Fiat 550e", "purple", 22, "compact kings", 2);

const hotWheels3 = new Hotwheels("red", true, "mega", "lego", "Bricking Speed", "blue", 128, "brick rides", 5);

