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

## RUN PROJECT
Go to root of project and run
``` sh
mkdocs serve
```

## DEPLOYMENT
Go to root of project and run.
Just edit the markdown files to add content.
``` sh
gulp build-site
firebase deploy
```
gulp build site would compile the mkdocs site and inject the required PWA files
