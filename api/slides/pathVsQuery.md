# Path vs. Query Parameters

It can be tricky to decide whether to use a path parameter or a query parameter.  The most important consideration
is that path parameters **must** be required (using a 'none', dash, or underscore as a nullable path parameter is, 
I think, objectively evil), while query parameters should be optional whenever possible.

If a resource is not found at a particular location, the service should respond 404 (except on DELETE), whereas if
the query parameter fails to discover a particular resource the service should return an appropriate empty result.

In short:

+ Path parameters should be used when you expect to find a resource at that path.
+ Query parameters should be used to see if there are resources matching the query.

``` plain
GET /users?id=user42      # BAD (or at least highly suspect)
GET /users/user42         # good... 404 if not found
GET /users?q=omalley      # good... returns users that match or an empty result
GET /users?type=external  # also good
```

### PATCH with query parameters

AFAIK there is no standard that disallows patching with query parameters... and I personally think it's really useful 
and intuitive:
 
``` plain
PATCH /deployments/foo-api?version=1.2.3 # no body
```
