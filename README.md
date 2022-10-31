# REQUEST 
> Es lo que se esta solicitando por parte del cliente, el cliente puede ser un navegador con un usuario, una aplicación, u otro server que esta solicitando algún recurso de mi servidor.

# RESPONSE
> Es la respuesta de mi servidor, luego de procesar la petición del (request).

# Middleware
> Son funciones que se ejecutan antes de hacer otro cosa

# HandleBars
> la idea de handlebars es que tengamos separados el model MVC model, view, controller

> Si se ua la configuracion por defecto se debe crear la carpeta views
[1.] Se crean los archivos a renderizar con el (nombre).hbs
[2.] Los argumentos para mostrarlos en la vista se pasan como segundo parametro en la funcion (render)
[3.] Los partials -> se usan como componentes que se pueden reutilizar en todas las vistas de la aplicación 