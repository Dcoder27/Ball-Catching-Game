
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
        equalButton: document.getElementById("equal_button"),
};     
    var resultContent = [];

        
         DOMstrings.number1.onclick = function() {
                type1();
                toString(DOMstrings.number1.textContent)
             resultContent.push(DOMstrings.number1.textContent);
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
            toString(DOMstrings.number2.textContent)
             resultContent.push(DOMstrings.number2.textContent);
            };
            function type2() {
                if (document.getElementById("result").textContent === '0' || DOMstrings.resultDisplay.textContent === '')
                {
                    document.getElementById("result").textContent = 2;
                } else 
                {
                    document.getElementById("result").textContent += 2;
                }
            }

     DOMstrings.number3.onclick = function() {
                type3();
             toString(DOMstrings.number3.textContent)
             resultContent.push(DOMstrings.number3.textContent);
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
             toString(DOMstrings.number4.textContent)
             resultContent.push(DOMstrings.number4.textContent);
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
             toString(DOMstrings.number5.textContent)
             resultContent.push(DOMstrings.number5.textContent);
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
             toString(DOMstrings.number6.textContent)
             resultContent.push(DOMstrings.number6.textContent);
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
             toString(DOMstrings.number7.textContent)
             resultContent.push(DOMstrings.number7.textContent);
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
             toString(DOMstrings.number8.textContent)
             resultContent.push(DOMstrings.number8.textContent);
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
             toString(DOMstrings.number9.textContent)
             resultContent.push(DOMstrings.number9.textContent);
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
             toString(DOMstrings.number0.textContent)
             resultContent.push(DOMstrings.number0.textContent);
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
    document.getElementById("decimal_button").onclick = function() 
    {
        DOMstrings.resultDisplay.textContent += '.';
        resultContent.push('.');
    }
    
    
        document.getElementById("plus_button").onclick = function() 
    {
        resultContent.push('+');
        DOMstrings.resultDisplay.textContent = '';
    }
    
    
        document.getElementById("subtract_button").onclick = function() 
    {
        resultContent.push('-');
        DOMstrings.resultDisplay.textContent = '';
    } 
        
        document.getElementById("multiply_button").onclick = function() 
    {
        resultContent.push('*');
        DOMstrings.resultDisplay.textContent = '';
    } 
        
        document.getElementById("divide_button").onclick = function() 
    {
        resultContent.push('/');
        DOMstrings.resultDisplay.textContent = '';
    }  
        
        document.getElementById("percentage_button").onclick = function() 
        {
            resultContent.push('/100')
            DOMstrings.resultDisplay.textContent += '%';
        } 
        
        document.getElementById("equal_button").onclick = function() 
        {
            final = resultContent.join('');
            finalResult = eval(final);
            DOMstrings.resultDisplay.textContent = finalResult;
        }
        



        DOMstrings.ACbutton.onclick = function() 
        {
            DOMstrings.resultDisplay.textContent = '';
            resultContent = [];
        }










































