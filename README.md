# CS-Carousel

A normal carousel wrote in plain javascript.

Current features:

* .gitignore
* html (just copy without lodash,...)
* scss (compiled and minimized in normal css)
* js (just eslint and copy)
* images (minimize of images and copy)
* basic .eslint config (google)
* webpack (as task-runner for everything)
* webpack-dev-server

Instruction of modules:

* webpack is the task-runner for everything
* webpack-dev-server is the local server how's running on Port 4000

## Get Started


### Install Node

Node: ```https://nodejs.org/en/```

### Developing


#### Setup a new project

```git clone this repo```

##### In main-Folder:

```npm install``` (Install the modules from package.json)

```npm run build``` (Builds the local files. If you want you need it only for the first build)

or

```npm start``` (Starting the webpack-dev-server with watcher)

or

```npm run watch``` (Builds the local files with a watcher without the webpack-dev-server)


## Instructions

### Folder Structure

(do not modify files directly in these folders)

```
* dist (compiled files for view)
* node_modules (think this is clear)
```

* src (project files)

The Folders ``.sass-cache``, ``assets``, ``dist`` and ``node_modules`` are automatically generated and should be never in a Repository. 

The generated Files in ``dist`` should be have no dependences. So that they can upload to a server or sended to a backend developer, without breaking the functionality or styling or whatever. 