import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { slotServices } from "./slot.services";

const createSlot = catchAsync(async (req, res) => {
  const slotData = req.body;
  const result = await slotServices.createSlotIntoDB(slotData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Slot created successfully",
    data: result,
  });
});
export const slotControllers = {
  createSlot,
};
