'use strict';
let keystone = require('keystone');
let Youth = keystone.list('Youth');

exports = module.exports = (req, res) => {

	let view = new keystone.View(req, res);
	let locals = res.locals;

	locals.section = 'youth';

	view.on('init', (next) => {
		let q = Youth.paginate({
			page: req.query.page || 1,
			perPage: 20,
			maxPage: 10,
		}).sort('-lastModifiedDateTime');

		q.exec((err, results) => {
			locals.youths = results;
			next(err);
		});

	});
	// render the view
	view.render('youthDashboard');
};
