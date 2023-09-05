### DDEV helpers

#### 2023
https://ddev.readthedocs.io/en/latest/users/quickstart/#wordpress
```sh
    # Start
    ddev config
    ddev start
    # Download and install wp
    ddev wp core download
    # Launch in browser to finish installation
    ddev launch
    ddev launch wp-admin/
```






#### OLD 2022

    // issues Win11 - resolve.conf gets rewrited
    // https://askubuntu.com/questions/1347712/make-etc-resolv-conf-changes-permanent-in-wsl-2
    sudo nano /etc/resolv.conf

    // no cache install plugin 
    ddev composer require wpackagist-plugin/all-in-one-video-gallery --no-cache
    ddev composer require wpackagist-plugin/fakerpress --no-cache
