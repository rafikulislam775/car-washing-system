import { TSlot } from "./slot.interface";
import { slotModel } from "./slot.model";

const createSlotIntoDB = async (payload: TSlot) => {
  const { service, date, startTime, endTime } = payload;
  // Generate slots
  const slots = [];
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);
  const serviceDuration = 60; // Service duration in minutes

  let currentStartHour = startHour;
  let currentStartMinute = startMinute;

  while (
    currentStartHour < endHour ||
    (currentStartHour === endHour && currentStartMinute < endMinute)
  ) {
    const currentEndMinute = currentStartMinute + serviceDuration;
    const nextStartHour =
      currentEndMinute >= 60 ? currentStartHour + 1 : currentStartHour;
    const nextStartMinute = currentEndMinute % 60;

    const slot = {
      service,
      date,
      startTime: `${currentStartHour
        .toString()
        .padStart(2, "0")}:${currentStartMinute.toString().padStart(2, "0")}`,
      endTime: `${nextStartHour.toString().padStart(2, "0")}:${nextStartMinute
        .toString()
        .padStart(2, "0")}`,
      isBooked: "available",
    };

    // Save slot to the database
    const createdSlot = await slotModel.create(slot);
    slots.push(createdSlot);

    currentStartHour = nextStartHour;
    currentStartMinute = nextStartMinute;
  }
  return slots;
};
// get all slots from the database sorting by date and servicesId
const getAvailability = async (query: Record<string, unknown>) => {
  // Destructure date and serviceId from the query parameters
  const { date, serviceId } = query;

  // Validate the query parameters
  if (!date || !serviceId) {
    throw new Error('Date and serviceId are required');
  }

  // Query the slotModel for slots that match the provided date and serviceId
  const slots = await slotModel
  .find({
    date,
    'service._id': serviceId,
  })
  .populate('Services') // Populate the service field
  .sort({ date: 1, startTime: 1 }); // Sort by date and then by start time
return slots
};


export const slotServices = {
  createSlotIntoDB,getAvailability
};
