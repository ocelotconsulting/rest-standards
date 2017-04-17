# HTTP verbs

Since we're going to use HTTP, it's probably worth a quick refresher on what each HTTP verb means.  There IS a formal
specification for that, so hopefully nothing here will be controversial.

You probably only need to worry about the five main HTTP verbs:

+ GET
+ PUT
+ POST
+ DELETE
+ PATCH (added in 2010)

GET, PUT, and DELETE **must** guarantee idempotency (along with HEAD and OPTIONS).  PATCH and POST do not guarantee
idempotency.  When a request is idempotent it can be safely retried without corrupting persistent state AND that 
the retry will succeed even if the first requests succeeds as well.
 

``` plain
GET /users/user42       # nullipotent... does not affect any state

POST /users 
{"name": "jane"}        # NOT idempotent... creates a new user each time

PUT /users/user42
{"id": "user42", ...}   # idempotent... if user42 already exists the document is replaced

DELETE /users/user42    # idempotent... responds 204 if user42 does not exist

PATCH /users/omalley 
{"enabled": false}      # may be idempotent but client cannot assume that it is
```

It's easy to mentally map each HTTP method to CRUD but that's not strictly accurate.  PUT means "create or update"
and POST can be used for other purposes than creation if necessary.

# HTTP standards for REST

+ Use the correct HTTP verb.  If, for example, you know what the resulting URL will be when creating a resource, use
  PUT *not* POST.
+ Guarantee idempotency for idempotent methods.  PUT should never fail when the item already exists.  DELETE must 
  respond 204 *not* 404 when the resource does not exist.  
+ Avoid RPC-like behavior whenever possible - but use POST if you must.    