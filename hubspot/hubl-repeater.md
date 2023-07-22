#### HubL Loop
- [HubSpot Loop get first item](https://community.hubspot.com/t5/CMS-Development/Get-first-value-of-repeater-field-in-blog-listing/m-p/310460)



```js
// watch for changes
{% for item in mysequence %}

{% if loop.first %}
I'll only print to the page on the first loop!
{% endif %}

{% endfor %}
```
