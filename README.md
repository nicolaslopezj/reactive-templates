Reactive Templates
==================

Set templates and override them in a reactive way.

This allows meteor package developers to make their templates overridable.

More specifically, what this packages does is that allows you to create a "imaginary template" where you can set helpers, events, etc. then, you can assign that "imaginary template" to a "real template" and all the helpers, events, etc. will be assigned to that "real template"

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
  ReactiveTemplates.setHelpers(identifier, helpers)
```

- ```identifier``` String. The identifier of the template request.
- ```helpers``` Object. Template helpers.

#### Set events

```js
  ReactiveTemplates.setEvents(identifier, events)
```

- ```identifier``` String. The identifier of the template request.
- ```events``` Object. Template events map.

#### Set onRendered

```js
  ReactiveTemplates.setOnRendered(identifier, onRendered)
```

- ```identifier``` String. The identifier of the template request.
- ```onRendered``` Function. onRendered hook.

#### Set onCreated

```js
  ReactiveTemplates.setOnCreated(identifier, onCreated)
```

- ```identifier``` String. The identifier of the template request.
- ```onCreated``` Function. onCreated hook.

#### Set onDestroyed

```js
  ReactiveTemplates.setOnDestroyed(identifier, onDestroyed)
```

- ```identifier``` String. The identifier of the template request.
- ```onDestroyed``` Function. onDestroyed hook.






