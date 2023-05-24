### Zendesk Replace with custom message

Zendesk Support

Configure the Dynamic Content you need with HTML
Add the Dynamic Content to the field description, but remove the curly brackets.
So `{{dc.description_test}}` becomes `dc.description_test`


```js
<script>
    var	description_test = `{{dc 'description_test'}}`;
    
    if (window.location.href.indexOf("requests/new") > -1) {
    	
    	// let's find all the hints and loop through them to replace possible variables
    	var hints = document.querySelectorAll('p[id*="_hint"]');
    	if(hints) {
    		hints.forEach(function(hint) {
          hint.innerHTML = hint.innerHTML.replace('dc.description_test',description_test);
        });
      }
    }
    
  </script>

```