# Pagination

Any endpoint that returns a collection of results that can be large enough to warrant pagination should just be 
designed to support pagination initially.  The most popular standard for pagination (as far as I can see) uses the 
`offset` and `count` query parameters:

``` plain
GET /users?count=100
GET /users?offset=100&count=100
```

The problem here is that it's usually pretty important to know how many total users exist - which doesn't really work
if the endpoint returns an array.

Some people endorse using a custom [http header](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
like `X-Total-Count` to return the total.  I really don't like this, because:

+ The total might arguably be the most important datum... and it's in the header.
+ Discoverability is terrible... people don't typically read headers unless there's an issue.

For a better solution, see [here](https://pdm-loadapi-dev.rgare.net/api/v1/batches?q=rule&initiative=PLAN&initiativeDate=201509)

Note that the offset/limit approach has a weakness... if items are inserted or deleted in-between requests you won't get
good results.  Some APIs use 'after' or 'startkey' (CouchDB) to ensure that subsequent pages always pick up where the last page
let off.
