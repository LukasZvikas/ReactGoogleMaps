
const Maps = require("../models/mapsSchema");

module.exports = app => {

	app.get("/city", (req, res) => {

		const Map = Maps.find({city: req.body.city});

		res.send(Map);
		

	})


}