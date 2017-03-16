# DrupalDevDays-Responsive-Testing-Workshop
Drupal Dev Days 2017

[**1. Installing required software.**](#1-installing-required-software)

[**1.1. Installing Nodejs.**](#11-installing-nodejs)

[**1.1.1. Using Linux.**](#111-using-linux)

[**1.1.2. Using OSX.**](#112-using-osx)

[**1.1.3. Using Windows.**](#113-using-windows)

[**1.1.4. Other OSs and further instructions.**](#114-other-oss-and-further-instructions)

[**1.1.5. Test It.**](#115-test-it)

[**2. Installing Galen Framework.**](#2-installing-galen-framework)

[**3. Config your Galen Project.**](#3-config-your-galen-project)


## 1. Installing required software.
 
### 1.1. Installing Nodejs.

##### 1.1.1. Using Linux.

Install required packages if not installed:

```bash
sudo apt-get install python-software-properties
```

Execute the following curl to add the needed PPA:

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

Now install nodejs:

```bash
sudo apt-get install -y nodejs
```

##### 1.1.2. Using OSX.

Using Homebrew:

```bash
brew install node
```

or just [download](http://nodejs.org/#download) the installer

##### 1.1.3. Using Windows.

[Download](http://nodejs.org/#download)  the installer.

##### 1.1.4. Other OSs and further instructions.

Follow the instructions from the [nodejs.org](https://nodejs.org/es/download/package-manager/) web.

##### 1.1.5. Test It.

To see if Node is installed, type the above on your command line:

```bash
node -v
```

To see if npm is installed, type the above on your command line:

```bash
npm -v
```

Go to project folder and install npm modules and dependencies:

```bash
npm i 
```

## 2. Installing Galen Framework.

Galen should be installed globally:

```bash
sudo npm install -g galenframework-cli
```

## 3. Config your Galen Project.

In order for galen to be able to communicate with browser we need to get a special driver for it.
For Firefox you will need a [geckodriver](https://github.com/mozilla/geckodriver/releases/tag/v0.15.0).

Download driver and extract it somewhere on your file system.

Create default configuration from console

```bash
galen config
```

Edit file /home/currentuser/.galen.config

Add this line

```bash
$.webdriver.gecko.driver=/path/to/your/geckodriver
```

** file config.js add to master