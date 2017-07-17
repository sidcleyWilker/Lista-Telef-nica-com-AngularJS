
app.interceptor(function (req, res, next){
	res.setHeader('Content-Type', 'application/json;charset=UTF-8');
	next();
});


app.get('/contatos', function (
