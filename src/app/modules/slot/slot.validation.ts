import { z } from "zod";
// Define the Zod schema for the slot model
const slotsValidationSchema = z.object({
  body: z
    .object({
      service: z.string().length(24), // MongoDB ObjectId
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // Date in YYYY-MM-DD format
      startTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/), // Time in HH:MM format
      endTime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/), // Time in HH:MM format
      isBooked: z.string().optional(), //
    })

    .refine(
      //.refine() মেথডটি ব্যবহার করে কাস্টম ভ্যালিডেশন যুক্ত করা হয়েছে।
      (data) => {
        // ei data te whole data peye jassi
        // Validate that endTime is after startTime
        const [startHour, startMinute] = data.startTime.split(":").map(Number); //"09:00".split(":") ফলাফল দেবে ["09", "00"].and map saliye eta k number convert kora
        //["09", "00"].map(Number) ফলাফল দেবে [9, 0].
        const [endHour, endMinute] = data.endTime.split(":").map(Number);
        return (
          endHour > startHour ||
          (endHour === startHour && endMinute > startMinute)
        );
      },
      {
        message: "End time must be after start time",
      }
    ),
});

export const slotsValidation = {
  slotsValidationSchema,
};
