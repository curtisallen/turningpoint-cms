'use strict';
let keystone = require('keystone');
let Youth = keystone.list('Youth');
let moment = require('moment');

exports = module.exports = (req, res) => {

	let view = new keystone.View(req, res);
	let locals = res.locals;

	locals.section = 'youth';

	view.on('init', (next) => {
		let youthId = req.params.youthId;
		if (youthId === undefined) {
			return console.error('youth id undefined');
		}
		Youth.model.findOne({ _id: youthId }).exec((err, youth) => {
			console.log(`youth: ${JSON.stringify(youth)}`);
			locals.youth = youth;
			locals.displayDate = moment(youth.enrolledDate).fromNow();
			locals.displayLastUpdated = moment(youth.lastModifiedDateTime).fromNow();
			next(err);
		});
	});
	// render the view
	view.render('youthDetail');
};
