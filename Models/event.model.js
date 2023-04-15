const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        name: { type: String, required: true },
        desc: { type: String, required: true },
        start: { type: Date, required: true },
        end: { type: Date, required: true },
        maxPlayer: { type: Number, required: true },
        admin_id: {
            type: Schema.Types.String, ref: "user", required: true
        },
        users: [
            {
                userName: String,
                status: { type: Boolean, default: false }
            }
        ]
    },
    { versionKey: false, timestamps: true }
);

const EventModel = model("event", eventSchema);

module.exports = { EventModel };