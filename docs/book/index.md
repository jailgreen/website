# Website skeleton

The easiest way to get started with Expressive is to use the [skeleton application and installer](https://github.com/zendframework/zend-expressive-skeleton).
 The skeleton provides a generic structure for creating your applications,
 and prompts you to choose a router, dependency injection container, template renderer,
 and error handler from the outset.

## Create a new project

First, we'll create a new project, using Composer's `create-project` command:

    $ composer create-project zendframework/zend-expressive-skeleton expressive

This will prompt you to choose:


* Whether to install a minimal skeleton (no default middleware),
 a flat application structure (all code under `src/`),
 or a modular structure (directories under `src/` are modules,
 each with source code and potentially templates, configuration, assets, etc.).
 The default is a "flat" structure; you can always add modules to it later.
* A dependency injection container. We recommend using the default, zend-servicemanager.
* A router. We recommend using the default, FastRoute.
* A template renderer. You can ignore this when creating an API project, but if you will be creating any HTML pages, we recommend installing one. We prefer Plates.
* An error handler. Whoops is a very nice option for development, as it gives you extensive, browseable information for exceptions and errors raised.

## Start a web server

The Skeleton + Installer creates a full application structure that's ready-to-go when complete.
 You can test it out using [built-in web server](http://php.net/manual/en/features.commandline.webserver.php).

From the project root directory, execute the following:

    $ composer run --timeout=0 serve

This starts up a web server on localhost port 8080; browse to http://localhost:8080/ to see if your application responds correctly!

## Next Steps

The skeleton provides a default structure for templates, if you choose to use them. Let's see how you can create your first vanilla middleware, and templated middleware.