#### HubL 
- [Module Fields](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields)


#### developerMode
```js
?developerMode=true
```

#### Statements

```js
{% set my_variable = "a statement does something" %}
{% set my_details = {"name":"aleksandar", "age":18, "eye_color":red} %}
```

### Expressions

```js

{{ my_variable }}
{{ my_details.name }}
{{ item.heading }}

```    

### Conditional Statements

```js

{% if my_variable == "a statement does something" %}
    {{ my_variable }}
{% else %}
    <p>empty</p>
{% endif %}

```

### Loops

```js

{% for item in my_details %}
    {{ item }}
{% endfor %}

// set and index
{% set numbers = ['one','two','three'] %}
{% for number in numbers|reverse %}
<p> Loop index: {{loop.index}} Number: {{ number }}</p>
{% endfor %}
// output index: 1, number: three

```



#### Comments

```js

{# not public comments #}

```