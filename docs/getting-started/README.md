# Getting Started

## Installation

The easiest way to install this package is through your terminal via Composer.  
Run the following command in a bash prompt from your projects root.
```bash
composer require artem-schander/l5-modular
```

#### Requirements

L5Modular v2 requires **at least** PHP 7.2 and Laravel 5.7  
Older PHP / Laravel versions are supported by L5Modular v1.

<br>
<br>

## Generating A Module

The built in Artisan command `php artisan make:module foo-bar` generates a ready to use module in the `app/Modules` folder.  

The welcome method in the generated controller `Http/Controllers/FooBarController.php`, the corresponding route in `routes/web.php` and the view `welcome.blade.php`, make it easy to dive in.  

You should now be able to see the output of `Modules/FooBar/resources/views/welcome.blade.php` by opening `http://laravel-project.dev/foo-bar` in your browser.  
*This can differ depending to your local development environment*

![welcome screen acreenshot](/assets/l5modular-screenshot.png)


<br>
<br>

#### Default Module

Unless [otherwise configured](/configuration/), this is how the generated module would look like.

```
laravel-project/
    app/
    └── Modules/
        └── FooBar
            ├── Http
            │   └── Controllers
            │       └── FooBarController.php
            ├── Models
            │   └── FooBar.php
            ├── resources
            │   ├── lang
            │   │   └── en.php
            │   └── views
            │       └── welcome.blade.php
            └── routes
                ├── api.php
                └── web.php
```

<br>
<br>

#### Custom Module

The said command [can be configured](/configuration/) to generate modules completely differently structured and up to the following extent.  
Of course it is also possible to [add any kind of additional classes](/usage/loading-additional-classes/) to any module, as long as it follows the PSR-4 autoloading convention.

```
laravel-project/
    app/
    └── Modules/
        └── FooBar
            ├── Events
            │   └── FooBar.php
            ├── Http
            │   ├── Controllers
            │   │   └── FooBarController.php
            │   ├── Requests
            │   │   └── FooBar.php
            │   └── Resources
            │       └── FooBar.php
            ├── Jobs
            │   └── FooBar.php
            ├── Listeners
            │   └── FooBar.php
            ├── Mail
            │   └── FooBar.php
            ├── Models
            │   └── FooBar.php
            ├── Notifications
            │   └── FooBar.php
            ├── Observers
            │   └── FooBar.php
            ├── Rules
            │   └── FooBar.php
            ├── config.php
            ├── database
            │   ├── factories
            │   │   └── FooBarFactory.php
            │   ├── migrations
            │   │   └── 2020_04_19_111656_create_foo_bars_table.php
            │   └── seeds
            │       └── FooBarSeeder.php
            ├── helpers.php
            ├── resources
            │   ├── lang
            │   │   └── en.php
            │   └── views
            │       └── welcome.blade.php
            └── routes
                ├── api.php
                └── web.php
```
