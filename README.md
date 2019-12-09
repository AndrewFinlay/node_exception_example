# node assert exception issue
Shows an unexpected difference in assert behaviour depending on whitespace

Under Node 10+ our test returns a different assertion failure message depending on differences in whitespace.
It seems that with a certain whitespace configuration we see the node 8 assertion failure message, other configurations will generate the node 10 message.

Assuming you're using nvm, to see the differences run: 

```
 $ nvm use v10
 $ npm t
```
