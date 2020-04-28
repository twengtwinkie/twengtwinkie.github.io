var solutionContainer = document.getElementById("solution-container");
var problemContainer = document.getElementById("problem-container");

solutionContainer.style.display = "none";

var problems = {
    "29-4-2020": "<p> If an acute triangle is divided into 3 triangles and 1 quadrilateral as shown below, what is the area of the quadrilateral ? </p> <img src='../images/puzzle/29-4-2020.png'/>",
};
var solutions = {
    "29-4-2020": "<p>18</p>"
};

var date = new Date();
var today = (date.getDate()+1) + "-" + (date.getMonth() + 1)  + "-" + date.getFullYear();

problemContainer.innerHTML = problems[today];
solutionContainer.innerHTML = solutions[today];