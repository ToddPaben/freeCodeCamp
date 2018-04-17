$(document).ready(function(){
  var mathArr = [];
  var calcArr = [];
  var subtotal = 0;
  var oppers = {
    "+": function(x, y) {return x + y;},
    "-": function(x, y) {return x - y;},
    "*": function(x, y) {return x * y;},
    "/": function(x, y) { if (y === 0) {return 0;} else {return x / y;}},
  };
  var okNum = true;
  var compound = false;
  var equalThere = false;
  var operLimit = true;
  var equalArr = [];
  
  function showNum(val){
    equalArr.length = 0;
    if(mathArr.length >12){
      $("#mensaje").html("MAX DIGITS REACHED");
      okNum = false;
    } else if(mathArr[0]===undefined){
      if (okNum===false){
        $("#mensaje").html('');
      }
      $("#disp").html(val);
      mathArr.push(val);
      operLimit = false;
      if (equalThere === true){
        $("#subtot").html('');
        calcArr.length = 0;
        equalThere = false;
      }
    } else {
      if (okNum===false){
        $("#mensaje").html('');
      }
      $("#disp").append(val);
      mathArr.push(val);
    }
  }
  function mather(val){
    if (okNum===false){
        $("#mensaje").html('');
      }
    equalArr.length = 0;
    if (compound === false && operLimit === false){
      calcArr.push(Number(mathArr.join('')), val);
      $("#subtot").html(calcArr.join(''));
      $("#disp").html(val);
      subtotal = calcArr[0];
      mathArr.length=0;
      operLimit = true;
      compound = true;
      
        
    } else {
      if (operLimit === false){
        if (equalThere === true){
          calcArr.push(val);
          $("#disp").html(val);
          var totales = subtotal.toFixed(2);
          $("#subtot").html(parseFloat(totales) + val);
          equalThere = false;
        } else {
          var segundo = Number(mathArr.join(''));
          var operadoraDos = calcArr[1];
          var nuevo = oppers[operadoraDos](subtotal, segundo);
          $("#disp").html(val);
          var limSub = nuevo.toFixed(2);
          $("#subtot").html(parseFloat(limSub) + val);
          subtotal = nuevo;
          mathArr.length=0;
          equalThere = false;
          calcArr.length=0;
          calcArr.push(subtotal, val);
        }
        
      }
    }
    
  }
  
  $("#eleven").on("click", function(){
    $("body").toggleClass("dark");
    $("#border").toggleClass("outerdark");
    $("#hache").toggleClass("letterdark");
    $("#en").toggleClass("letterdark");
    $("#el").toggleClass("letterdark");
    $("#logo").toggleClass("logodark");
    $("#plato").toggleClass("platedark");
    $("#clentry").toggleClass("tandark");
    $("#screen").toggleClass("screendark");
    $("#divide").toggleClass("tandark");
    $("#times").toggleClass("tandark");
    $("#allClear").toggleClass("tandark");
    $("#minus").toggleClass("tandark");
    $("#plus").toggleClass("tandark");
    $("#dot").toggleClass("tandark");
    $("#equals").toggleClass("tandark");
    $("#seven").toggleClass("whiteDark");
    $("#eight").toggleClass("whiteDark");
    $("#nine").toggleClass("whiteDark");
    $("#four").toggleClass("whiteDark");
    $("#five").toggleClass("whiteDark");
    $("#six").toggleClass("whiteDark");
    $("#one").toggleClass("whiteDark");
    $("#two").toggleClass("whiteDark");
    $("#three").toggleClass("whiteDark");
    $("#zero").toggleClass("whiteDark");
   var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var c = canvas.getContext('2d');
    
    
    function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.draw = function(){
    c.fillStyle = 'rgba(255, 255, 255, .3)';
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
  };
  this.update = function(){
    if (this.x + this.radius >innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if (this.y + this.radius >innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}
var circleArr = [];

for (var i=0;i<100;i++){
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 0.4;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dy = (Math.random() - 0.5) * 0.7;
  var radius = Math.random() * 5;
  //var opa = Math.random();
  circleArr.push(new Circle(x, y, dx, dy, radius));
  //var circle = new Circle (200, 200, 3, 3, 30);
}


function animate (){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for(var i = 0; i < circleArr.length; i++){
    circleArr[i].update();
  }
}
animate();
    
    
    
    
  });
  $("#one").on("click", function(){
    showNum(1);
  });
  $("#two").on("click", function(){
    showNum(2);
  });
  $("#three").on("click", function(){
    showNum(3);
  });
  $("#four").on("click", function(){
    showNum(4);
  });
  $("#five").on("click", function(){
    showNum(5);
  });
  $("#six").on("click", function(){
    showNum(6);
  });
  $("#seven").on("click", function(){
    showNum(7);
  });
  $("#eight").on("click", function(){
    showNum(8);
  });
  $("#nine").on("click", function(){
    showNum(9);
  });
  $("#zero").on("click", function(){
    if(mathArr[0]===undefined){
      $("#disp").html(0);
      mathArr.push(0);
    } else if (mathArr[0] === 0 && mathArr[1] !== "."){
               
    } else {
      $("#disp").append(0);
      mathArr.push(0);
    }
  });
  $("#divide").on("click", function(){
    mather("/");
  });
  $("#times").on("click", function(){
    mather("*");
  });
  $("#minus").on("click", function(){
    mather("-");
  });
  $("#plus").on("click", function(){
    mather("+");
    });
  $("#clentry").on("click", function(){
    mathArr.length = 0;
    if (equalThere===true){
      $("#subtot").html(0);
      calcArr.length = 0;
      equalArr.length = 0;
      operLimit=true;
      compound=false;
    }
    $("#disp").html(0);
    $("#mensaje").html("");
    equalThere=false;
  });
  $("#dot").on("click", function(){
    if (mathArr[0] === undefined){
      mathArr.push(0, ".");
      $("#disp").html("0.");
    } else if (mathArr.includes('.')){
      
    } else {
      showNum('.');
    }
    
  });
  $("#allClear").on("click", function(){
    mathArr.length = 0;
    calcArr.length = 0;
    total = 0;
    $("#disp").html(0);
    $("#mensaje").html("");
    $("#subtot").html("");
    equalThere = false;
    operLimit = true;
    compound = false;
  });
  $("#equals").on("click", function(){
    if (equalThere === true){
      var cooper = equalArr[0];
      var repeater = equalArr[1];
      var repeat = oppers[cooper](subtotal, repeater);
      var displayer = 0;
      if (repeat > 9999999999){
        displayer = repeat.toPrecision(10);
        $("#disp").html(displayer);
        $("#subtot").html(displayer);
      } else {
        displayer = repeat.toFixed(5);
        $("#disp").html(parseFloat(displayer));
        var subDisplay = repeat.toFixed(2);
        $("#subtot").html(parseFloat(subDisplay));
      }
      subtotal = repeat;
    } else {
      var second = Number(mathArr.join(''));
      var operadora = calcArr[1];
      var newtot = oppers[operadora](subtotal, second);
      var expTot = 0;
      equalArr.push(operadora, second);
      if (newtot > 99999999999999){
      expTot = newtot.toPrecision(10);
      $("#disp").html(expTot);
      $("#subtot").html(expTot);
      } else {
      expTot = newtot.toFixed(10);
      var expSub = newtot.toFixed(2);
      $("#disp").html(parseFloat(expTot));
      $("#subtot").html(parseFloat(expSub));
      }
      subtotal = newtot;
      mathArr.length=0;
      calcArr.length=0;
      calcArr.push(subtotal);
      equalThere = true;
      compound = true;
      
    }
  });
  
});