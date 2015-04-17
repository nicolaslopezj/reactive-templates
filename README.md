Reactive Templates
==================

Set templates and override them in a reactive way.

This allows meteor package authors to make their templates overridable.

More specifically, what this packages does is that allows you to create a "imaginary template" where you can set helpers, events, etc. then, you can assign that "imaginary template" to a "real template" and all the helpers, events, etc. will be assigned to that "real template"

## Example

Nothing explains better than an example, so before everything, here is an example.

Let's say we have a package that provides a contact form. We want include a basic template, but we wan't to make it easy to override without loosing helpers and events.

The first thing we will do is to request a template and set events and some code where we use that future template.

```js
ReactiveTemplates.request('contactForm', 'basicForm') // Basic form is the name of the default template we will create later

ReactiveTemplates.events('contactForm', {
  'click .send': function() {
    var message = this.$('textarea').val();
    sendMessage(message);
  }
})

Router.route('/contact', function () {
  this.layout(ReactiveTemplates.get('layout'));
  this.render(ReactiveTemplates.get('contactForm'));
});
```

Then, we will create our default template (this is not necesary, but in most cases the developer will do it).

```html
<template name="basicForm">
  <textarea name="message"></textarea>
  <button class="send">Send</button>
</template>
```

Now, we are ready to ship out package. 

Maybe the developer using the package uses bootstrap, so he will override the template.

```html
<template name="bootstrapForm">
  <textarea class="form-control" name="message"></textarea>
  <button class="send btn btn-primary"></button>
</template>
```

And assing it to the request.

```js
ReactiveTemplates.set('contactForm', 'bootstrapForm')
```

Now the template its re-rendered automatically because of the reactivity and "bootstrapForm" has now the helpers and events we defined


## Getting Started

#### Request templates

The first thing to do is to request a template. This will allow you to set helpers, events, etc. to the template that will be assigned to that template request.

```js
ReactiveTemplates.request(identifier, defaultTemplate)
```

- ```identifier``` String. The identifier of the template request.
- ```defaultTemplate``` String. Optional. Put a template name here if you wan't to assign that template to that request when its created.

#### Assign templates

When we have a template request, we can assign a template to that request. All the helpers, events, etc. will be passed to our template. Old helpers, events, etc. of the template will stay

```js
ReactiveTemplates.set(identifier, templateName)
```

- ```identifier``` String. The identifier of the template request.
- ```templateName``` String. The name of the assigned template.

#### Get assigned template

When we wan't to render a template, we need the template name, not the request identifier. This function returns the template name of the specified request. This function is reactive.

```js
ReactiveTemplates.get(identifier)
```

- ```identifier``` String. The identifier of the template request.

## Setting helpers, events, etc

Setting helpers, events, etc. works really similar to meteor default way, the main diference is that we have to put the request identifier instead of the template

#### Set helpers

```js
ReactiveTemplates.helpers(identifier, helpers)
```

- ```identifier``` String. The identifier of the template request.
- ```helpers``` Object. Template helpers.

#### Set events

```js
ReactiveTemplates.events(identifier, events)
```

- ```identifier``` String. The identifier of the template request.
- ```events``` Object. Template events map.

#### Set onRendered

```js
ReactiveTemplates.onRendered(identifier, onRendered)
```

- ```identifier``` String. The identifier of the template request.
- ```onRendered``` Function. onRendered hook.

#### Set onCreated

```js
ReactiveTemplates.onCreated(identifier, onCreated)
```

- ```identifier``` String. The identifier of the template request.
- ```onCreated``` Function. onCreated hook.

#### Set onDestroyed

```js
ReactiveTemplates.onDestroyed(identifier, onDestroyed)
```

- ```identifier``` String. The identifier of the template request.
- ```onDestroyed``` Function. onDestroyed hook.

#### Set another property

If you use a package like manuel:viewmodel that adds another properties to 
templates you can call a generic method to set that property.

```js
ReactiveTemplates.assignProperty(property, identifier, argument)
```

- ```property``` String. The name of the property, example "viewmodel".
- ```identifier``` String. The identifier of the template request.
- ```argument``` The argument of the property.

Calling this method will traduce in

```js
Template.myTemplate.property(argument);
```

## Helpers

#### Render template

To render a reactive template directly from the template without using javascript use this

```html
<template name="myTemplate">
  {{> reactiveTemplate template=requestIdentifier }}
</template>
```

Where ```requestIdentifier``` is the identifier of the template request.
