# Versioning

API versioning is critical to a microservices architecture - not to mention developer sanity.  The simplest versioning
scheme - `/api/v1/users` - is also quite common and most consumers find it intuitive.  There's really no good reason
not to start versioning from day one since it takes little effort.

This is a pragmatic approach - it's easy to set up and use.  It is not without controversy though - it's possible to request
a version using an Accept header - but more complicated to implement (and consume).
 
Note that releasing a versioned API does not mean that it can never change - just that these changes cannot break 
existing clients.
  
Generally adding properties to an entity requires a new version because a serializer will often fail when an unknown property
is present.  This can be worked around with a version query parameter:

+ `GET /users/user42`

___api/slides/userV1.json

+ `GET /users/user42?version=2`
           
___api/slides/userV2.json
