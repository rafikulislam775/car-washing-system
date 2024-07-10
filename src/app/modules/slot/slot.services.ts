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

export const slotServices = {
  createSlotIntoDB,
};
