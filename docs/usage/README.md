# Usage

In most cases there is not much to consider. Just add files to your modules, keep the PSR-4 autoloading conventions in mind and you're good.  
However, some components can only be correctly used if you know how Laravel handles them.

<br>
<br>

## Views

To tell Laravel that you want to render a view file from a specific module, you need to use the double-colon syntax.  
The `welcome.blade.php` from the example module `FooBar` could be rendered like this

```php
return view("FooBar::welcome");
```
<br>
<br>

## Translations

For the translations applies the same as for the views. You can access them with the double-colon syntax.

```php
echo trans('FooBar::example.welcome');
```
<br>
<br>

## Routing

For the routes it is not enough to get correctly loaded through PSR-4, they need to be registered by the corresponding service provider to be accessible.  
Unless [otherwise configured](/configuration/), the service provider will look for the files `routes/web.php` and `routes/api.php` and load them with the corresponding middleware and the controllers namespace.  
That means you can register routes without having to enter the full namespace.

```php
Route::resource('foo-bar', 'FooBarController');
```
<br>
<br>

## Migrations

For the migrations it is not enough to get correctly loaded through PSR-4, they need to be registered by the corresponding service provider to be accessible.  
Unless [otherwise configured](/configuration/), the service provider will expect the migrations inside the `database/migrations/` folder of every module.

<br>
<br>

## Factories

For the factories applies the same as for the migrations.  
Unless [otherwise configured](/configuration/), the service provider will expect the factories inside the `database/factories/` folder.

<br>
<br>

## Loading additional classes

Often enough there is a need to load additional classes into a module. Since Laravel loads the app using the [PSR-4](http://www.php-fig.org/psr/psr-4/) autoloading standard, you can just add folders and files almost without limitations. The only thing you should keep in mind is to name the file exactly like the class name and to add the correct namespace.

F.a. If you want to add the `app/Modules/FooBar/Services/FancyService.php` to your module, you can absolutely do so. The file could then look like this

```php
<?php
namespace App\Modules\FooBar\Services;

class FancyService
{
    public static function doFancyStuff() {
        return 'some output';
    }
}
