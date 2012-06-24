var im		= require('imagemagick'),
	_		= require('underscore'),
	glob	= require('glob');


glob('./*@2x*',{},function (err,files) {
	_.each(files,function(oldFilepath,index) {
		var newFilepath = oldFilepath.replace(/^(.*)@2x(.*?)$/, '$1$2');
		console.log("Downsizing "+oldFilepath+" to "+ newFilepath +"...");

		im.convert([oldFilepath, '-resize', '50%', newFilepath], 
		function(err, metadata){
			if (err) throw err
		})
	})
});

