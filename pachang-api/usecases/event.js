const Event = require("../models/event")

function create ({name, location, items, date}) {

    // const newEvent = new Event({name, location, items, date})
    // newEvent.save()
    // alternative model
    return Event.create({name, location, items, date}) 
}

function getAll() {
    return Event.find({}).lean()
}

function getById(id) {
    return Event.findById(id).lean()
}

async function assingCarrier (eventId, indexItem, carrierName){
    const event = await Event.findById(eventId)
    event.items[indexItem].carrier = carrierName
    return event.save()
}

module.exports = {
    create,
    getAll,
    getById,
    assingCarrier
}