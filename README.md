# Template :pineapple:

This is a static HTML5, SCSS and JavaScript template to start new projects.

## Get Started

```bash
git clone git@github.com:angelajholden/template.git

npm install
```

---

### Grunt JS Task Runner

In the terminal type `grunt` to start watching your files. The output should look something like this.

![Grunt running in the terminal](/grunt-in-terminal.png)

---

### Live Reload

Listens on `port: 8000` by default. Double check the grunt terminal output to be sure.

```bash
http://127.0.0.1:8000
```

---

### Source Folders

Edit SCSS and JavaScript in the Components directory. Add scripts and styles as needed.

```
components/
|__ scripts/
    |__ main.js

|__ scss/
    |__ _variables.scss
    |__ _normalize.scss
    |__ _main.scss
    |__ styles.scss
```

---

### Compiled Folders

Grunt will compile your SCSS and JavaScript like this.

```
dist/
|__ js/
    |__ scripts.js
    |__ scripts.min.js
    |__ scripts.min.js.map

|__ css/
    |__ styles.css
    |__ styles.map.css
```

---

### Deploy to Heroku

Static projects can be deployed to Heroku as a `php` app with this hack.

```php
<?php
/*
To deploy static HTML projects, we need to let Heroku think this is a PHP app
If you don't need this, delete index.php and change the name of home.html to index.html
*/
include_once('home.html');
?>
```

Cheers!  
Angela :two_hearts:
