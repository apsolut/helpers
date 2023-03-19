#### HubL Module Markup
- [HubL Standard Tags](https://developers.hubspot.com/docs/cms/hubl/tags?_ga=2.68872659.376326715.1679220686-605606513.1679220686)
- 
- [Module overview](https://developers.hubspot.com/docs/cms/building-blocks/modules/using-modules-in-templates)

```js
// no_wrapper can be used not to wrap 
// Basic syntax
{# Basic syntax #}
{% module "unique_module_name" path="@hubspot/module_type",
  parameterString='String parameter value',
  parameterBoolean=True
%}

// Sample of a default HubSpot text module
{% module "job_title" path="@hubspot/text",
  label="Job Title",
  value="Chief Morale Officer"
%}

//Sample of a custom module
{% module "faqs" path="/Marketplace/HubSpotSiteSetup/Vast_Site_Setup/Custom_Modules/Vast FAQ Module",
  l
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
