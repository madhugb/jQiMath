jQiMath
====================
**Introduction**

jQiMath is a wrapper for basic math operations. The advantage of the plugin is easy to use and customizable design.

**Syntax**

  var result = $.iMath(`operation`,`operand1`, `operand2`);
  
  * Operation
     <pre>  +     -       *       /     %    &&    ||   ^  </pre>
    or you can also use it like 
    <pre> add, subtract, multiply , divide , mod , AND , OR , XOR </pre>

  * Operand1 
  
       This is mandatory, it should be either integer or float,

       this can be array for `add` and `subtract` operations. (operand 2 will be ignored in this case)
       
  * Operand2 
 
       Should be integer or float 

  * result 
       
       Result can be integer or float, 
 
       it will return 'error' in case of any error


**Invoking**

You can use this in 2 ways 
  * extending jquery's $ symbol  
    <pre>
        
        var A = 10, B = 20, C;        
        C = $.iMath('+', A, B);                
    </pre>

  * accessing as a normal plugin
    <pre>        
        $('#result').iMath('+', A , B);      
        // the result will be appended to $('#result') element
    </pre>
    