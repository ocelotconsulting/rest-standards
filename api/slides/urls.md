# URLs

Impatient developers rarely fully read documentation... so how you design your URLs is of critical importance.
There is some latitude for debate on this topic - e.g. singular vs. plural, but in general a few standards apply.
    
+ Avoid verbs, as consumers don't reason about a REST api that way.  If you can, design your API such that the HTTP 
verbs are sufficient.  
    
``` plain
POST /users/create   # BAD
POST /users          # good
 
GET /getUser/user42 # BAD
GET /user/user42    # good
```

It can be helpful to think of your resources as a directory tree of sorts. 
Watch out for conflicts between nested resources and ids - this is roughly like having a file and a directory with 
the same name - avoid that.  

``` plain
GET /users/user42
# BAD - client might rightly expect a user with id 'internal' to exist
GET /users/internal
# better idea if the schema is the same
GET /users?internal=true
# or if not...
GET /internal-users 
```

Some APIs mix plural (e.g. `GET /users`) with singular (e.g. `GET /user/user42`) nouns - e.g. 
[pet store](http://petstore.swagger.io/).  Using all plurals is straightforward... using singular nouns is confusing
if you have any plural endpoints.  

AFAIK there is no official standard on whether URLs should use lowercase, PascalCase, camelCase, snake_case, or 
dasherized-case for multiword path segments, but dasherized seems more common to me.
