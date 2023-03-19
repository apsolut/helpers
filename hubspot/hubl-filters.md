#### HubL Repeatable Fields
- [Module and theme fields](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields)
- [HubL variables & macros syntax](https://developers.hubspot.com/docs/cms/hubl/variables-macros-syntax)


```js
{% set my_number = -53 %}
{{ my_number|abs }}

// debugging - pretty print filter
{{ site_settings|pprint }}

// boolean
{% if "true"|bool == true %}hello world{% endif %}

```


```js
{% set rows = ["apples", "oranges", "pears", "grapes", "blueberries"] %}

<table>
    {% for row in rows|batch(3, "&nbsp;") %}
    <tr>
        {% for column in row %}
        <td>{{ column }}</td>
        {% endfor %}
    </tr>
    {% endfor %}
</table>
```    
