var fs = require('fs');
var path = require('path');

var fileExt 	= process.argv[3]; // fileExt = the extention of process.argv[3]
var filePath	= process.argv[2]; // filePath = the path of process.argv

fs.readdir(filePath, function(err, list) 
{
	for( i = 0; i < list.length; i++ ) 
	{
		var current = list[i];

		if ( path.extname( current ) == '.' + process.argv[3] ) 
		{
			console.log(current);
		}
	}

});


// [2] path
// [3] file

// get extension of [3]
// print all the other files that have extension of [3] 




/*#####################################################################
  ##                       ~~  FILTERED LS  ~~                       ##
  #####################################################################

Create a program that prints a list of files in a given directory, filtered by the extension of the files. 
You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') 
and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only 
files that end with .txt.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

-------------------------------------------------------------------------------

## HINTS

The fs.readdir() method takes a pathname as its first argument and a callback as its second. The callback signature is:

    function callback (err, list) 
    { / ... / }

where list is an array of filename strings.

Documentation on the fs module can be found by pointing your browser here:
  /usr/lib/node_modules/learnyounode/node_apidoc/fs.html

You may also find node's path module helpful, particularly the extname method.

Documentation on the path module can be found by pointing your browser here:
  /usr/lib/node_modules/learnyounode/node_apidoc/path.html

------------------------------------------------------------------------------- */