# fromCtoF
A simple project and test of the Electron framework, a temperature converter from Celsius to Fahrenheit

Dependecies you need:

>Nodejs/npm  ```$ sudo apt install nodejs && sudo apt install npm```

>Electron  ```$ npm i -D electron@latest```

>rpm  ```$ sudo apt install rpm```

# Compiling and testing
# Linux
Choose one folder (i.e Documents)
```
$ npx create-electron-app fromctof
$ git clone https://github.com/fra98/fromCtoF
```
In /Documents you'll find two folders, fromctof and fromCtoF, copy fromCtoF content to fromctof.

Merge and replace any duplicate file

Now to test it
```
$ npm start
```
Now to compile it
```
$ npm run make 
```

.deb and rpm executables will generate in out/make/ directory
