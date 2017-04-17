# Schema

Each endpoint should return the same schema for all requests, whether or not optional query parameters are present.
But we define the term 'schema' a little more loosely.

For example:

___api/slides/user1.json

___api/slides/user2.json

These two entities don't have the same schema - but only because of the name/fullName and enabled/disabled properties.
Optional fields are fine - in fact it's common and quite useful to allow the client to select which fields are desired:
 
``` plain
GET /users/user42?fields=id,name,enabled
```
 