let keystone = require('keystone');
let faker = require('faker');
let Types = keystone.Field.Types;

/**
 * Youth Model
 * ==========
 */
var Youth = new keystone.List('Youth', {
	autokey: { path: 'slug', from: 'anonymized', unique: true },
});

Youth.add({
	name: { type: Types.Name, required: false, index: true },
	anonymized: { type: Types.Name, required: true, index: true, value: function () { return faker.name.findName(); } },
	enrolledDate: { type: Types.Date, required: true, index: true, default: Date.now },
	lastModifiedDateTime: { type: Types.Datetime, required: true, index: true, default: Date.now },

});
Youth.defaultColumns = 'firstName, lastName, anonymized, enrolledDate, lastModifiedDateTime';
Youth.register();
