let box = document.getElementById("textbox");

box.addEventListener('input', function(){
    let text = this.value;  //to get the value
    let char = text.length;   // to get the length which we write in input
    document.getElementById("char").innerHTML = char; //  this is for character count

    text = text.trim(); // for trim the side space

    let words = text.split(" ");
    let cleanlist = words.filter(function(elm){
        return elm !=""; // it clean which has no words in space
    });
    document.getElementById("word").innerHTML = cleanlist.length; // this is for word count
});