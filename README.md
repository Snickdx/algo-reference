# Algorithms Reference

## REQUIREMENTS
* npm and gulp
* python 2.7
* pip http://www.saltycrane.com/blog/2010/02/how-install-pip-ubuntu/


## INSTALLATION
``` sh
sudo pip install mkdocs
sudo pip install mkdocs-material
npm install
```

## Development
Go to root of project and run
``` sh
mkdocs serve
```
This will setup a live reload server to show your edits in the browser.
Edit the corresponding markdown files for the chapter you wish to contribute to.


## DEPLOYMENT
Go to root of project and run.
``` sh
gulp build-site
firebase deploy
```
gulp build site would compile the mkdocs site and inject the required PWA files
firebase deploy will deploy it to https://algorithms-90a10.firebaseapp.com/dynamic/
