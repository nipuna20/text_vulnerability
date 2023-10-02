const mongoose = require("mongoose");
const { Schema } = mongoose;

const messagesSchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	mobileNumber: {
		type: String,
		required: true,
	},

	message: {
		type: String,
		required: true,
	},

	isActive: {
		type: Boolean,
		required: false,
		default: true,
	},

	createdOn: {
		type: Date,
		required: false,
	},
});

module.exports = mongoose.model("Messages", messagesSchema);
