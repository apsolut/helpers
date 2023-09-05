#### HubL Repeatable Fields
- [Module and theme fields](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields#repeaters)


```js
// alignment field
{
    "name": "img_position",
    "label": "Position Image",
    "help_text":"Position the image within it's container.",
    "required": false,
    "type": "alignment",
    "default": {
     "horizontal_align": "CENTER",
     "vertical_align": "TOP",
    }
}




```
```js
// json video fields
{
    "id" : "ca4a319e-5b58-422e-47ac-49ce1b51b507",
    "name" : "videoplayer_field",
    "label" : "Video",
    "required" : false,
    "locked" : false,
    "type" : "videoplayer",
    "show_advanced_options" : false,
    "default" : {
    "player_id" : 32173842991,
        "height" : 1224,
        "width" : 1872,
        "conversion_asset" : {
        "type" : "CTA",
            "id" : "c3e4fa03-2c69-461d-b9af-22b2fde86bc7",
            "position" : "POST"
    },
    "loop_video" : false,
        "mute_by_default" : false,
        "autoplay" : false,
        "hide_control" : false
}
}

// video

{{ item.media.video.player_id }}
{% if item.media.video.player_id %}
{% set max_width = item.media.video.size_type == 'auto_custom_max' ? item.media.video.max_width : item.media.video.width %}
{% set max_height = item.media.video.size_type == 'auto_custom_max' ? item.media.video.max_height : item.media.video.height %}
{% video_player "embed_player"
    autoplay={{ item.media.video.autoplay }},
    conversion_asset={{ item.media.video.conversion_asset|tojson|safe }},
    full_width={{ item.media.video.size_type == 'auto_full_width' }},
    height={{ max_height }},
    hidden_controls={{ item.media.video.hide_controls }},
    loop={{ item.media.video.loop_video }},
    muted={{ item.media.video.mute_by_default }},
    play_button_color={{ module.style_options.oembed_thumbnail_play_button_color.color }},
    player_id={{ item.media.video.player_id }},
    type={{ item.media.video.player_type or 'scriptV4' }},
    width={{ max_width }}
%}
{% endif %}

```

```js
// background-color from color picker
  {% if module.text_background %} style="background-color:rgba({{ module.text_background.color|convert_rgb}} , {{  module.text_background.opacity / 100}})" {% endif %}

```

```js
// Module syntax
{% module_block module "my_rich_text_module" path="/My Rich Text Field Module",
    label="My Rich Text Field Module"
        %}
{% module_attribute "rich_text_field_variable" %}
<div>My HTML block</div>
{% end_module_attribute %}
{% end_module_block %}


// widget_block is deprecated, use module_block instead.
// This example is only to explain what type_of_module 
// was used for, for those with legacy code. 
{% widget_block rich_text "my_rich_text_module" overrideable=True, label='My rich-text module'  %}
{% widget_attribute "html" %}
<h2>New Module</h2>
<p>Add content here.</p>
{% end_widget_attribute %}
{% end_widget_block %}

```    
