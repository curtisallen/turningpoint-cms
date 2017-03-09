let keystone = require('keystone');
let Types = keystone.Field.Types;

/**
 * Status Model
 * ==========
 */
var Status = new keystone.List('Status');

Status.add({
	status: { type: Types.Select, options: 'Spartan, Veteran', index: true, required: true, initial: true },
	enrolledDate: { type: Types.Date, required: true, index: true, default: Date.now },
	youth: { type: Types.Relationship, ref: 'Youth' },
});
Status.defaultColumns = 'status, enrolledDate';
Status.register();
