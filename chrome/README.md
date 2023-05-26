#### Chrome extensions - Web Extensions manifest 3
    
```js
// https://stackoverflow.com/questions/63308160/how-to-migrate-manifest-version-2-to-v3-for-chrome-extension

//Manifest v2
"browser_action": {...}
"page_action": {...}

//Manifest v3
"action": {...}

//Manifest v2
"background": {
    "scripts": ["js/background.js"]
}

//Manifest v3
"background": {
    "service_worker": "js/background.js"
}
// Permissions
// https://developer.chrome.com/docs/extensions/reference/permissions/
//Manifest v2
"permissions": [
    "contentSettings",
    "https://regiondogmbh.zendesk.com/*"
],
    
//Manifest v3
"host_permissions": [
    "https://extension.ninja/*"
],

```
