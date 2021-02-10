var express = require('express');

var multer = require('multer');
var storage = multer.diskStorage({
	destination:function(req,file,cb){
		cb(null,__dirname+'/uploads/')
	},filename :function(req,file,cb){
		cb(null,file.originalname)
	}
})
var upload = multer({storage:storage})

var express_imgupload = express();
express_imgupload.set('view engine','pug');


express_imgupload.get('/imgUpload',function(req,res,next){
	 res.render(__dirname+'/form_data_upload_view',{title:' Express JS File Uploading'});

})
express_imgupload.post('/img_uploading',upload.single('imageupload'),function(req,res){
	// console.log(req.file);
	console.log('Image file Upload information is as follows :');
	console.log('Destination Path :'+req.file.destination);
	console.log('Image Name :'+req.file.originalname);
	console.log('Image Whole Path :'+req.file.path);

	res.send('File is Uploaded Sucessfully.');
})

express_imgupload.listen(3000,"127.0.0.1");


//Browser Hit URL :  http://127.0.0.1:3000/imgUpload
// This will load form and after goes to "img_uploading" for upload image and upload image at specified locations too.