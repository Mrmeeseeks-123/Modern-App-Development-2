function Math_calculate() {
    let expression = document.getElementById("expression").value;
    if (expression) {
      try {
        let answer = math.evaluate(expression);
        document.getElementById("expression").value = answer;
        addlog(expression, answer);

      }
      catch (e) { console.log(e) };
    }}


 function addlog(expression, answer) {
      let element = document.createElement("li");
      element.innerHTML = expression + "=" + answer;
      document.getElementById("log").appendChild(element);
    }    


function addnum(n){
    console.log(n);
    let expression=document.getElementById("expression").value;
    document.getElementById("expression").value=expression + n;
}

function addop(j){
    console.log(j);
    let expression=document.getElementById("expression").value;
    document.getElementById("expression").value=expression + j;
}

function initialise(){
    let a=['1','2','3','4','5','6','7','8','9','0'];
    let o=['/','+','-','*'];
    for(let i of a){
        document.getElementById(i).addEventListener("click",function(){
            addnum(i);
        });
    }
    for(let j of o){
        document.getElementById(j).addEventListener("click",function(){
            addop(j);
        });
    }

} 