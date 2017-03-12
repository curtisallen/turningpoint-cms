'use strict';
const keystone = require('keystone');
const faker = require('faker');
/**
 * Seeds the database with some initial users
 */
module.exports = (done) => {
	keystone.createItems({
		Youth: [{
			'name.full': faker.name.findName(),
			'anonymized': faker.name.findName(),
			'enrolledDate': faker.date.past(),
			'status': ['status1', 'status6'],
			'infringement': ['infringement1', 'infringement6'],
			'__ref': 'youth1',
		}, {
			'name.full': faker.name.findName(),
			'anonymized': faker.name.findName(),
			'enrolledDate': faker.date.past(),
			'status': ['status2', 'status7'],
			'infringement': ['infringement2', 'infringement7'],
			'__ref': 'youth2',
		}, {
			'name.full': faker.name.findName(),
			'anonymized': faker.name.findName(),
			'enrolledDate': faker.date.past(),
			'status': ['status3', 'status8'],
			'infringement': ['infringement3', 'infringement8'],
			'__ref': 'youth3',
		}, {
			'name.full': faker.name.findName(),
			'anonymized': faker.name.findName(),
			'enrolledDate': faker.date.past(),
			'status': ['status4', 'status9'],
			'infringement': ['infringement4', 'infringement9'],
			'__ref': 'youth4',
		}, {
			'name.full': faker.name.findName(),
			'anonymized': faker.name.findName(),
			'enrolledDate': faker.date.past(),
			'status': ['status5', 'status10'],
			'infringement': ['infringement10'],
			'__ref': 'youth5',
		}],
		Status: [{
			status: 'Spartan',
			enrolledDate: faker.date.past(),
			youth: 'youth1',
			__ref: 'status1',
		}, {
			status: 'Spartan',
			enrolledDate: faker.date.past(),
			youth: 'youth2',
			__ref: 'status2',
		}, {
			status: 'Spartan',
			enrolledDate: faker.date.past(),
			youth: 'youth3',
			__ref: 'status3',
		}, {
			status: 'Spartan',
			enrolledDate: faker.date.past(),
			youth: 'youth4',
			__ref: 'status4',
		}, {
			status: 'Spartan',
			enrolledDate: faker.date.past(),
			youth: 'youth5',
			__ref: 'status5',
		}, {
			status: 'Veteran',
			enrolledDate: faker.date.recent(),
			youth: 'youth1',
			__ref: 'status6',
		}, {
			status: 'Veteran',
			enrolledDate: faker.date.recent(),
			youth: 'youth2',
			__ref: 'status7',
		}, {
			status: 'Veteran',
			enrolledDate: faker.date.recent(),
			youth: 'youth3',
			__ref: 'status8',
		}, {
			status: 'Veteran',
			enrolledDate: faker.date.recent(),
			youth: 'youth4',
			__ref: 'status9',
		}, {
			status: 'Veteran',
			enrolledDate: faker.date.recent(),
			youth: 'youth5',
			__ref: 'status10',
		}],
		Infringement: [{
			type: 'refused',
			youth: 'youth1',
			date: faker.date.past(),
			__ref: 'infringement1',
		}, {
			type: 'walk-out',
			youth: 'youth2',
			date: faker.date.past(),
			__ref: 'infringement2',
		}, {
			type: 'suspended',
			youth: 'youth3',
			date: faker.date.past(),
			__ref: 'infringement3',
		}, {
			type: 'slept',
			youth: 'youth4',
			date: faker.date.past(),
			__ref: 'infringement4',
		}, {
			type: 'sexual comment',
			youth: 'youth5',
			date: faker.date.past(),
			__ref: 'infringement5',
		}, {
			type: 'horseplay',
			youth: 'youth1',
			date: faker.date.past(),
			__ref: 'infringement6',
		}, {
			type: 'contraband',
			youth: 'youth2',
			date: faker.date.past(),
			__ref: 'infringement7',
		}, {
			type: 'refused',
			youth: 'youth3',
			date: faker.date.past(),
			__ref: 'infringement8',
		}, {
			type: 'slept',
			youth: 'youth4',
			date: faker.date.past(),
			__ref: 'infringement9',
		}, {
			type: 'contraband',
			youth: 'youth5',
			date: faker.date.past(),
			__ref: 'infringement10',
		}],
	}, (err, stats) => {
		stats && console.log(stats.message);
		done(err);
	});
};
