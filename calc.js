var addition = false;

var subtraction = false;

var multiplication = false;

var division = false;


var DOMstrings = {
        number1: document.getElementById("1_button"),
        number2: document.getElementById("2_button"),
        number3: document.getElementById("3_button"),
        number4: document.getElementById("4_button"),
        number5: document.getElementById("5_button"),
        number6: document.getElementById("6_button"),
        number7: document.getElementById("7_button"),
        number8: document.getElementById("8_button"),
        number9: document.getElementById("9_button"),
        number0: document.getElementById("0_button"),
        ACbutton: document.getElementById("AC_button"),
        resultDisplay: document.getElementById("result"),
        equalButton: document.getElementById("equal_button")
};     
    var resultContent = [];
    parseInt(resultContent);
    var i, counter;

for(i = 0; i <= resultContent; i++)
{
         DOMstrings.number1.onclick = function() {
                type1();
                resultContent.push(1);
            };
            function type1() {
               if (document.getElementById("result").textContent === '')
                {
                    document.getElementById("result").textContent = 1;
                } else 
                {
                    document.getElementById("result").textContent += 1;
                }
            }


     DOMstrings.number2.onclick = function() {
                type2();
         resultContent.push(2);
            };
            function type2() {
                if (document.getElementById("result").textContent === '0')
                {
                    document.getElementById("result").textContent = 2;
                } else 
                {
                    document.getElementById("result").textContent += 2;
                }
            }

     DOMstrings.number3.onclick = function() {
                type3();
         resultContent.push(3);
            };
            function type3() {
                if (document.getElementById("result").textContent === '')
                {
                    document.getElementById("result").textContent = 3;
                } else 
                {
                    document.getElementById("result").textContent += 3;
                }
            }

     DOMstrings.number4.onclick = function() {
                type4();
         resultContent.push(4);
            };
            function type4() {
                if (document.getElementById("result").textContent === '')
                {
                    document.getElementById("result").textContent = 4;
                } else 
                {
                    document.getElementById("result").textContent += 4;
                }
            }

     DOMstrings.number5.onclick = function() {
                type5();
         resultContent.push(5);
            };
            function type5() {
                if (document.getElementById("result").textContent === '')
                {
                    document.getElementById("result").textContent = 5;
                } else 
                {
                    document.getElementById("result").textContent += 5;
                }
            }
     DOMstrings.number6.onclick = function() {
                type6();
         resultContent.push(6);
            };
            function type6() {
                if (document.getElementById("result").textContent === '')
                {
                    document.getElementById("result").textContent = 6;
                } else 
                {
                    document.getElementById("result").textContent += 6;
                }
            }

     DOMstrings.number7.onclick = function() {
                type7();
         resultContent.push(7);
            };
            function type7() {
                if (document.getElementById("result").textContent === '')
                {
                    document.getElementById("result").textContent = 7;
                } else 
                {
                    document.getElementById("result").textContent += 7;
                }
            }

     DOMstrings.number8.onclick = function() {
                type8();
         resultContent.push(8);
            };
            function type8() {
                if (document.getElementById("result").textContent === '')
                {
                    document.getElementById("result").textContent = 8;
                } else 
                {
                    document.getElementById("result").textContent += 8;
                }
            }
     DOMstrings.number9.onclick = function() {
                type9();
         resultContent.push(9);
            };
            function type9() {
                if (document.getElementById("result").textContent === '')
                {
                document.getElementById("result").textContent = 9;
                } else 
                {
                    document.getElementById("result").textContent += 9;
                }
            }

     DOMstrings.number0.onclick = function() {
                type0();
         resultContent.push(0);
            };
            function type0() {
                if (document.getElementById("result").textContent === '')
                {
                    document.getElementById("result").textContent = 0;
                } else 
                {
                    document.getElementById("result").textContent += 0;
                }
            }
    //if (DOMstrings.equalButton.)
}


console.log(resultContent);

DOMstrings.ACbutton.onclick = function() 
{
    DOMstrings.resultDisplay.textContent = '';
}










































