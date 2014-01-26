var fretNum = [1,2,3,4,5,6,7,8,9,10,11,12],
    stringName = ['E','B','G','D','A','E'],
    stringNum = [1,2,3,4,5,6],
    getChars = function(bufferOne, bufferTwo){
        var out,
            index = Math.floor((Math.random() * bufferOne.length));
        
        if(bufferTwo){
            out = bufferOne[index] + " " + bufferTwo[index];
        } else {
            out = bufferOne[index];
        }
        return out;
    },
    gen = function(){
        console.log("  String:" + getChars(stringNum, stringName) + "\n  Fret:" + getChars(fretNum));
        setTimeout(gen, 5000);
    };

gen();
