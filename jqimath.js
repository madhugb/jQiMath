/* 
 * jQiMath, jQuery in-line Math functions
 * Copyright(c) 2012 Madhu <madhuvana@gmail.com>
 * https://github.com/madhugb/jQiMath
 */
 
(function($){  
  function iMathLogic() {     
    this.error = 'error';    
  };
  
  iMathLogic.prototype.isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  iMathLogic.prototype.equals = function(a,b) {
    if (this.isNumber(a) && this.isNumber(b)) {
    }
  };
  
  iMathLogic.prototype.add = function(a,b) {
    if ($.isArray(a) && a.length > 0) {
      var c;
      for (var i=0; i < a.length; i++)
        c += a[i];
      return c;
    }
    else if (this.isNumber(a) && this.isNumber(b)) {                        
       return a + b;
    }    
    return this.error;
  };
  
  iMathLogic.prototype.subtract = function(a,b){
    if ($.isArray(a) && a.length > 0) {
      var c;
      for (var i=0; i < a.length; i++)
        c -= a[i];
      return c;
    }
    else if (this.isNumber(a) && this.isNumber(b)) {                
       return a - b;
    }
    return this.error;
  };
  
  iMathLogic.prototype.multiply = function(a,b) {
    if ($.isArray(a) && a.length > 0) {
      var c;
      for (var i=0; i < a.length; i++)
        c *= a[i];
      return c;
    }
    else if (this.isNumber(a) && this.isNumber(b)) {                
       return a * b;
    }    
    return this.error;
  };
  
  iMathLogic.prototype.divide = function(a,b) {
    if (this.isNumber(a) && this.isNumber(b) && (b * 1) != 0) {
      return a / b;
    }    
    return false;
  };
  
  iMathLogic.prototype.mod = function(a,b) {
    if (this.isNumber(a) && this.isNumber(b) && (b * 1) != 0) {
      return a % b;
    }    
    return this.error;
  };
  
  iMathLogic.prototype.bitAND = function(a,b) {    
    return a && b;
  };
  
  iMathLogic.prototype.bitOR = function(a,b) {
    return a || b;
  };
  
  iMathLogic.prototype.bitXOR = function(a,b) {
    return a ^ b;
  };  
  
  iMathLogic.prototype.doThings = function(options) {
    var operandA, operandB, operator;
    if (typeof options[0] === 'undefined')
      return this.error;
    else 
      ref = options[0];
    try {
      if (typeof options[1] !== 'undefined') {
        
        if (typeof options[1] === 'string')
          operandA = parseFloat(options[1]);
        else
          operandA = options[1];
      }
      else
        return false;    
      if (typeof options[2] !== 'undefined') {
        if (typeof options[1] === 'string')
          operandB = parseFloat(options[2]);
        else
          operandB = options[2];
      }
    }
    catch(e) {
      return this.error;
    }    
    
    switch(ref) {
      case '+'  :
      case 'add':      return this.add(operandA,operandB);
      break;
      
      case '-'       :
      case 'subtract': return this.subtract(operandA, operandB);
      break;
      
      case '*'       :
      case 'multiply': return this.multiply(operandA,operandB);
      break;
      
      case '/'     :
      case 'divide':   return this.divide(operandA,operandB);
      break;
      
      case '%'  :
      case 'mod':      return this.mod(operandA,operandB);
      break;
      
      case '&&' :
      case 'AND':      return this.bitAND(operandA,operandB);
      break;
      
      case '||':
      case 'OR':       return this.bitOR(operandA,operandB);
      break;
      
      case '^'  :
      case 'XOR':      return this.bitXOR(operandA,operandB);
      break;
    }
  };
  
  $.fn.iMath = function() {
    var args = arguments;
    return this.each(function() {
      imath = new iMathLogic();      
      var res = imath.doThings(args);      
      $(this).val(res);      
    });
  };
  
  $.iMath = function() {     
     imath = new iMathLogic();      
     return imath.doThings(arguments); 
  };  
  
})(jQuery);
