var lat=37.5;
var lng=-131.2;
var direction;

if (lat > 38 && lng < -134) { 
    direction = "NW";
} else {
    if (lat > 38 && lng > -134) {
        direction = "NE";
    } else {
        if (lat < 38 && lng < -134) {
           direction = "SW";
        } else {
            if (lat < 38 && lng > -134) {
                direction = "SE";
            }
       }
    }
}
console.log(direction);
