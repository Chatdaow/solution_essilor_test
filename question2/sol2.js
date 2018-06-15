var n = 8
var m = 8
for (var y = 1; y <= n; y++) {
    var line = ""
    for (var x = 1; x <= m; x++) {
        if (x % 2 == 0) {
            if( y % 2 == 0 ) {
                line += "#"
            } 
            else {
                line += " "
            }
        } 
        else {
            if (y % 2 == 0) {
                line += " "
            } 
            else {
                line += "#"
            }
        }
    }
    console.log(line) 
}
