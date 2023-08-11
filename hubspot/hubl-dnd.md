#### HubL Drag n Drop
- [Drag and Drop Templates](https://developers.hubspot.com/docs/cms/building-blocks/templates/drag-and-drop-templates)
- [Drag and Drop Sections](https://developers.hubspot.com/docs/cms/building-blocks/templates/drag-and-drop-areas)
- [Call Module in Template](https://developers.hubspot.com/docs/cms/building-blocks/modules)


```js
{% dnd_area "no_structure", label="No Structure" %}


{% end_dnd_area %}
```


```js
{% dnd_area "no_structure", label="No Structure" %}
{% dnd_section 
    background_color={
    r: 200,
    g: 200,
    b: 200,
    a: 1},
    padding={
    top: 10,
        bottom: 10,
        left: 10,
        right: 10
        },
    vertical_alignment="MIDDLE"
    %}

{% dnd_column width=4 %}
    {% dnd_row%}

        {% dnd_module "image" path="@hubspot/image",flexbox_positioning='MIDDLE_CENTTER', label="Featured Image" %}
        {% end_dnd_module %}

    {% end_dnd_row%}
{% end_dnd_column %}

{% dnd_column width=8, offset=4 %}
    {% dnd_row%}

        {% dnd_module "rich_text" path="@hubspot/rich_text",label="Featured Text" %}
        {% end_dnd_module %}
    
    {% end_dnd_row%}
{% end_dnd_column %}

{% end_dnd_section %}

{% end_dnd_area %}

```    
