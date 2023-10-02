const mongoose = require("mongoose");
const { Schema } = mongoose;

const deliveryServiceSchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	telephoneNumber: {
		type: String,
		required: true,
	},

	address: {
		type: String,
		required: true,
	},

	description: {
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

	createdBy: {
		type: Schema.Types.ObjectId,
		required: false,
		ref: "User",
	},

	updatedOn: {
		type: Date,
		required: false,
	},

	updatedBy: {
		type: Schema.Types.ObjectId,
		required: false,
		ref: "User",
	},
});

module.exports = mongoose.model("DeliveryService", deliveryServiceSchema);
