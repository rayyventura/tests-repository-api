# Linkr ⛓️
## Share and tag links!

### :computer: Tech used
<p>
	<img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"/>
	<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
	<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
	<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
	<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"/>

</p>

## Overview
This is the API with which the [Repoprovas App](https://github.com/rayyventura/tests-repository) interacts.

## :hammer_and_wrench: Installation
### Make sure you have the following tools installed before you begin:
<p>
	<a href="https://git-scm.com/"><img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/></a>
	<a href="https://www.npmjs.com/package/npm"><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/></a>
	<a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/></a>
	<a href="https://www.postgresql.org/download/"><img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"/></a>
</p>
<p>Not needed but recommended: <a href="https://code.visualstudio.com/">VSCode</a></p>

#### This API was designed to work with  [Repoprovas App](https://github.com/rayyventura/tests-repository) 

Use a terminal interface such as bash or zsh, and enter the following:
```bash
#download
gh repo clone git@github.com:rayyventura/tests-repository-api.git

#access the folder you downloaded it to
cd tests-repository

#install dependencies
npm i
```
The app will run locally and you must configure a ```.env``` file with a port of your choosing. The default one is 4000.

## :gear:Running
```bash
#you can run the server with
npm run dev
```

