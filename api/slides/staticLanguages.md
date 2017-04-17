# Statically Typed Languages

When using statically typed languages, it's usually more straightforward to use a serialization library than to 
write dynamic JSON.  As a result, the APIs are often unpleasant to use if the developer has not designed them 
correctly.

The ideal situation is to have the schema fully validated yet generated dynamically.  In practice dynamic JSON is a 
PITA in every statically typed language I've seen.  In practice, developers (myself included) sometimes take a few 
shortcuts to save some boilerplate:

___api/slides/couch_doc.json

The problem is compounded when many services written in statically typed languages communicate with one another.  A 
few general guidelines will save confusion in the long run:

+ Never serialize all of your internal attributes just to avoid creating a DTO.  Create the DTO.... this is relatively
easy to do in .NET and Scala.
+ If possible, ignore extra properties when deserializing.  This allows APIs to add properties without breaking 
existing clients.  The only alternative is frequent versioning... which we'll talk about in the next slide.
+ Don't let your serializer use JSON null if that's an option... in practice it's very rare for the distinction between
a null value and a missing value to be important.
+ Don't be afraid of dynamic JSON if that's an alternative.

