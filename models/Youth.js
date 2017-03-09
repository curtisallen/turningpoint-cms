let keystone = require('keystone');
let Types = keystone.Field.Types;

/**
 * Youth Model
 * ==========
 */
var Youth = new keystone.List('Youth');

Youth.add({
	name: { type: Types.Name, required: true, initial: true, index: true },
	anonymized: {
		type: Types.Text,
		required: false,
		index: true,
	},
	enrolledDate: { type: Types.Date, required: true, index: true, default: Date.now },
	lastModifiedDateTime: { type: Types.Datetime, required: true, index: true, default: Date.now },

});
Youth.defaultColumns = 'firstName, lastName, anonymized, enrolledDate, lastModifiedDateTime';
Youth.register();
