# Why are standards important?

+ In a microservice architecture, it's easy to forget how some of your own team's services work - let alone someone
else's.  To reason about a particular service efficiently you're going to need to have some degree of confidence in
the service's compliance.  For example, suppose you're calling a service that's responding 500.  In an ideal world, you
won't even bother to make sure you're not missing a required query parameter or that your request body has the correct
schema... both of those would be a 400 error.
+ Standards are not primarily about making management or clients happy (although that's often a nice side benefit) - 
they make developers more productive.