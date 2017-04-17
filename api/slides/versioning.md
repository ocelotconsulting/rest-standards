# Versioning

API versioning is critical to a microservices architecture - not to mention developer sanity.  The simplest versioning
scheme - `/api/v1/users` - is also quite common and most consumers find it intuitive.  There's really no good reason
not to start versioning from day one since it takes little effort.
 
Note that releasing a versioned API does not mean that it can never change - just that these changes cannot break 
existing clients.  
