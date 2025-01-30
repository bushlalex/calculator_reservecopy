let firstNumber = ''
let secondNumber = ''
let operation = null;
let result
 
let calculate = function () { 
  const first = parseFloat(firstNumber);
  const second = parseFloat(secondNumber);
 switch (operation) {
   case 'plus':
    result = sum(first, second);
    break; 
  case 'minus':
  result = difference(first, second);
    break;
  case 'umnozhit':
   result = multiple(first, second);
   break;
   case 'delit':
    result = delenie(first, second);
    break;
   default:
    return;
 }
 if (result == Infinity) {  
  display.textContent = 'Чел ты...';
  firstNumber = '';
  secondNumber = '';
  operation = null;
  result = null;
 }
 else {
 secondNumber = result.toString().substr(0, 20);
 updateDisplay();
 firstNumber = secondNumber;
 secondNumber = '';
}}
function addOperation(oper) {  
  if ((firstNumber !== '')&&(secondNumber !== '')) {
    operation = oper;
    calculate();
  }
  else if ((firstNumber =='')&&(secondNumber =='')) {
    operation = oper;
    firstNumber = display.textContent;
    display.textContent = '';    
}
  else if ((firstNumber !=='')&&(secondNumber =='')) {     
    secondNumber = display.textContent;
    if (secondNumber =='') {
      return;
    }
    else if (firstNumber == secondNumber) {
      display.textContent = firstNumber;
      secondNumber = '';
      operation = oper;
    }
    else {
    calculate()
    operation = oper;     
  }}
  }

let sum = function (a, b) {
    return a + b
  } 
  let difference = function (a, b) {
    return a - b
  }
  
  let multiple = function (a, b) {
    return a * b
  }
  
  let delenie = function (a, b) {
    return a / b
  }

  function updateDisplay () {
    display.textContent = secondNumber;
  }
 
  let display = document.querySelector('#vihod')
  display.textContent = ''
  display.style = "background-color: gray; width: 100%; height: 90%; text-align:end; align-content:end; font-size: 40px; border-radius:15px; border-color: black; font-weight: bold;"
 
  function usloviyaKnopkiCifri (cifra) {
    if (((display.textContent).length < 16)&&(display.textContent !=='0')) {
      display.textContent += cifra;      
    }
    else if (((display.textContent).length < 16)&&(display.textContent =='0')) {
      display.textContent = cifra;    
    }          
  }
  function usloviyaKnopkiTochka () {
    if (((display.textContent).indexOf('.') == -1) && (display.textContent!= '')) {
      display.textContent += '.'
    }
  }
  function usloviyaKnopkiCifriNolja () {
    if ((vihod.textContent!= '0')&&(vihod.textContent.length < 16)) {
      display.textContent += '0';
  }}
  C.addEventListener('click', () => {
    poiskKlassa ()
    firstNumber = ''
    secondNumber = ''
    operation = null;
    display.textContent = ''
      
  })

  deleted.addEventListener('click', () => {
    if (display.textContent.length > 0) {
      display.textContent = display.textContent.slice(0, -1);
    }
  })
  plusminus.addEventListener('click', () => {
    if (display.textContent !='') {
    display.textContent *= -1; 
  }})
  zero.addEventListener ('click', () => {
    poiskKlassa ()
    usloviyaKnopkiCifriNolja()
  })
  tochka.addEventListener ('click', () => {
    poiskKlassa ()
    usloviyaKnopkiTochka()
  })
  one.addEventListener('click', () => {
    poiskKlassa ()
    usloviyaKnopkiCifri('1')
  })
  two.addEventListener('click', () => {
    poiskKlassa ()
    usloviyaKnopkiCifri('2')
  })
  three.addEventListener('click', () => {
    poiskKlassa ()
    usloviyaKnopkiCifri('3')
  })
  four.addEventListener('click', () => {
    poiskKlassa ()
    usloviyaKnopkiCifri('4')
  })
  five.addEventListener('click', () => {
    poiskKlassa ()
    usloviyaKnopkiCifri('5')
  })
  six.addEventListener('click', () => {
    poiskKlassa ()
    usloviyaKnopkiCifri('6')
  })
  seven.addEventListener('click', () => {
    poiskKlassa ()
    usloviyaKnopkiCifri('7')
  })
  eight.addEventListener('click', () => {
    poiskKlassa ()
    usloviyaKnopkiCifri('8')
  })
  nine.addEventListener('click', () => {
    poiskKlassa ();
    usloviyaKnopkiCifri('9')
  })
  ravno.addEventListener('click', () => {
    if ((firstNumber !=='')&&(secondNumber =='')) {
    secondNumber = display.textContent;
    if (secondNumber!=='') {    
    calculate();
    firstNumber = secondNumber;
    secondNumber = '';
  }}
})
  function poiskKlassa () {
      if (plus.classList.contains('light-theme')||minus.classList.contains('light-theme')
      ||umnozhit.classList.contains('light-theme')||delit.classList.contains('light-theme')) {
  plus.classList.remove('light-theme')
  minus.classList.remove('light-theme')
  umnozhit.classList.remove('light-theme')
  delit.classList.remove('light-theme')
  display.textContent = ''}}
      
  plus.addEventListener('click', () => {   
    plus.classList.add('light-theme')
    delit.classList.remove('light-theme')
    umnozhit.classList.remove('light-theme')
    minus.classList.remove('light-theme')   
    addOperation('plus');
    operation = 'plus';
  })

  minus.addEventListener('click', () => {    
    minus.classList.add('light-theme')
    delit.classList.remove('light-theme')
    umnozhit.classList.remove('light-theme')
    plus.classList.remove('light-theme')     
    addOperation('minus');
    operation = 'minus';
  })
  umnozhit.addEventListener('click', () => {    
    umnozhit.classList.add('light-theme')
    delit.classList.remove('light-theme')
    minus.classList.remove('light-theme')
    plus.classList.remove('light-theme')  
    addOperation('umnozhit');
    operation = 'umnozhit';
  })
  delit.addEventListener('click', () => {    
    delit.classList.add('light-theme')
    umnozhit.classList.remove('light-theme')
    minus.classList.remove('light-theme')
    plus.classList.remove('light-theme')
    addOperation('delit');
    operation = 'delit'  
  })


    
  
  

  