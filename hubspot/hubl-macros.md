#### HubL Macros
- [AAA](AAA)


```js
{% macro rem(values) %}
{% set baselineFontSize = 16 %}
{% set cssValues = [] %}

{% for v in values %}
    {% set thisVal = v/baselineFontSize~'rem' %}
    {{ do cssValues|appent(thisVal) }}
{% endfor %}

{{ cssValues|join(', ')}}

{% endmacro %}
```


```js


```    
