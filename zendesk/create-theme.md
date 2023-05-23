### Zendesk Theme Creation for Help Center (KB)

### Starting resources:
- [Introduction](https://developer.zendesk.com/apps/docs/help-center-templates/introduction)
- [Preview Theme Localy - ZAT](https://support.zendesk.com/hc/en-us/articles/4408822095642)



General help docs:
https://support.zendesk.com/hc/en-us/sections/4405298906266


### Translations
- need to create this in Workspace > Dynamic content
- [Localizing help center](https://support.zendesk.com/hc/en-us/articles/4408834328090-Localizing-help-center-content)
- [Change design based on Language](https://support.zendesk.com/hc/en-us/articles/4408894121754-Changing-your-help-center-design-based-on-your-end-user-language )
   ```shell
   # l18n  {{dc.custom_message}} 
    {{dc 'custom_message'}}
   ```