var express = require('express');
var router = express.Router();
const users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
	let email = req.body.email;
	let password = req.body.password;
	if (!email) {
		res.json({ response: false, message: "Email missing." });
	} else if (!password) {
		res.json({ response: false, message: "Password missing." });
	} else {
		users.findOne({ email: { '$eq': email }, password: { '$eq': password } }, function (err, user) {
			if (err) {
				res.json({ response: false, message: err });
			}
			if (user) {
				res.json({ response: true, message: "Data found", data: user });
			} else {
				res.json({ response: false, message: "No Data found" });
			}
		});
	}
});

router.post('/add_user', function (req, res, next) {
	let name = req.body.name;
	let email = req.body.email;
	let contact = req.body.contact;
	let address = req.body.address;
	let company = req.body.company;
	let password = req.body.password;
	if (!name) {
		res.json({ response: false, message: "Name missing." });
	} else if (!email) {
		res.json({ response: false, message: "Email missing." });
	} else if (!contact) {
		res.json({ response: false, message: "Contact missing." });
	} else if (!address) {
		res.json({ response: false, message: "Address missing." });
	} else if (!company) {
		res.json({ response: false, message: "Company missing." });
	} else if (!password) {
		res.json({ response: false, message: "Password missing." });
	} else {
		users.findOne({ email: { '$eq': email }, contact: { '$eq': contact } }, function (err, user) {
			if (err) {
				res.json({ response: false, message: err });
			}
			if (user) {
				res.json({ response: false, message: "Data found" });
			} else {
				var json_ary = {
					name: name,
					email: email,
					contact: contact,
					address: address,
					company: company,
					created_at: new Date(),
					password: password,
				}
				users.create(json_ary, function (err, docs) {
					if (err) {
						res.json({ response: false, message: err });
					} else {
						res.json({ response: true, message: "Data Inserted" });
					}
				});
			}
		});
	}
});

module.exports = router;
