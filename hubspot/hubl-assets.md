#### HubL Assets



```js
{{ require_css(get_assets_url("../css/main.css"))}}
{{ require_css("https://fonts.googleapis.com/css?family=Merriweather:400,700|Lato:400,700&display=swap") }}
{{ require_js(get_asset_url("../../js/main.js")) }}
```


```js
// in modules, can enable JQ from Hubspot Dashboard
{% require_js %}
<script>
    $(document).ready(function() {
        // do something
    });
</script>
{% end_require_js %}

```    
