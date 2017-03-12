'use strict';

let keystone = require('keystone');
let Types = keystone.Field.Types;

/**
 * Infringement Model
 *=================
 */
let Infringement = new keystone.List('Infringement');

Infringement.add({
	type: {
		type: Types.Select,
		options: 'refused, walk-out, suspended, slept, sexual comment, horseplay, contraband',
		required: true,
		initial: true,
	},
	date: { type: Types.Date, required: true, index: true, default: Date.now, initial: true },
	lastModifiedDateTime: { type: Types.Datetime, required: true, index: true, default: Date.now, noedit: true },
	/**
	 * Relationships
	 */
	youth: { type: Types.Relationship, ref: 'Youth', initial: true },
});

Infringement.defaultColumns = 'type, youth, date, lastModifiedDateTime';
Infringement.register();
