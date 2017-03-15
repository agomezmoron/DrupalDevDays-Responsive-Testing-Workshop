# DrupalDevDays-Responsive-Testing-Workshop
Drupal Dev Days 2017

[**1. Installing required software.**](#1-installing-required-software)

[**1.1 Installing Nodejs.**](#11-installing-nodejs)

[**1.2 Installing yarn (optional).**](#12-installing-yarn-optional)

[**2. Installing Galen Framework .**](#2-installing-galen-framework)


## 1. Installing required software
 
### 1.1 Installing Nodejs

##### Using linux

Install required packages if not installed.

```bash
sudo apt-get install python-software-properties
```

Execute the following curl to add the needed PPA

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

Now install nodejs

```bash
sudo apt-get install -y nodejs
```

##### Using OSX

Using Homebrew

```bash
brew install node
```

or just [download](http://nodejs.org/#download) the installer

##### Using Windows

[Download](http://nodejs.org/#download)  the installer.

##### Other OSs and further instructions

Follow the instructions from the [nodejs.org](https://nodejs.org/es/download/package-manager/) web.

##### Using npm
```
npm i
```

## 2. Installing Galen Framework

Galen should be installed globally:

```bash
 npm install -g galenframework-cli
 ```
 
 It might require sudo.