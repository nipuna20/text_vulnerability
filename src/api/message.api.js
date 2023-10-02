const { model } = require("mongoose");
const Message = require("../models/message.model");
const logger = require("../utils/logger");

/**
 * Message Service
 * @param {MeesageDTO}
 * @service save message
 * @returns {Promise<responseDTO>}
 */

const saveMessage = async (request, response) => {
	try {
		let { name, email, mobileNumber, message } = request.body;

		let messageModel = new Message({
			name,
			email,
			mobileNumber,
			message,
			isActive: true,
			createdOn: new Date(),
		});

		await messageModel.save();

		response.json({
			isSuccess: true,
			message: "Message has been submited Successfully...",
		});
	} catch (error) {
		logger.error(error);

		response.json({
			isSuccess: false,
			message: "Error has been occred please try again " + error,
		});
	}
};

const markAsRead = async (request, response) => {
	try {
		const { id } = request.params;

		const message = await Message.findById(id);

		if (message === null) {
			response.json({
				isSuccess: false,
				message: "Not Found Message Please try Again",
			});
		}

		const messageObj = await Message.findByIdAndUpdate(id, {
			isActive: false,
		});

		response.json({
			isSuccess: true,
			message: "Message has been marked as read successfully",
		});
	} catch (error) {
		logger.error(error);

		response.json({
			isSuccess: false,
			message: "Error has been occred please try again ",
		});
	}
};

module.exports = {
	saveMessage,
	markAsRead,
};
