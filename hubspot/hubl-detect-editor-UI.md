#### HubSpot Module detect backend (editor UI)
[If module in EDIT mode](https://community.hubspot.com/t5/CMS-Development/HUBL-query-for-if-in-quot-edit-mode-quot/td-p/445590)
[Detect different places HubL] (https://developers.hubspot.com/changelog/march-2023-rollup#:~:text=are%20most%20needed.-,New%20HubL%20Variables,-for%20Detecting%20When)


```hubl

{% if is_in_editor || is_in_page_editor %}
{% dnd_area "area_1" %}
{% end_dnd_area %}
{% endif %}

```
