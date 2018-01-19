/*
Here are the common characters that need to be escaped in JavaScript strings:

1.  single quote -->  \'
2.  double quote -->  \"
3.  backslask --> \\
4.  new line --> \n
5.  return -->  \r
6.  tab --> \t
7.  backspace --> \b
8.  form feed --> \f

Challenge:  Create a string that matches the following:
Here's the first line
/Here's the second line/
Here's the third line
*/
var myStr = "Here\'s the first line\n\\Here\'s the second line\\\rHere's the third line";
console.log(myStr);