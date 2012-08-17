jQiMath
====================
**Introduction**

jQiMath is a wrapper for basic math operations. The advantage of the plugin is easy to use and customizable design.

You can use this in 2 ways 
  * extending jquery's $ symbol  
    <pre>
        
        var A = 10, B = 20;
        
        $.iMath('+', A, B);                
        $.iMath('-', A, B);        
        $.iMath('*', A, B);        
        $.iMath('/', A, B);        
        $.iMath('%', A, B);                
        
        $.iMath('XOR', A , B );        
        $.iMath('AND', A &lt; 10, B &lt;=20);        
        $.iMath( 'OR', A &gt; 10, B &lt;=20);      
    </pre>

  * accessing as a normal plugin
    <pre>        
        $('#result').iMath('+', A , B);      
        // the result will be appended to $('result') element
    </pre>

