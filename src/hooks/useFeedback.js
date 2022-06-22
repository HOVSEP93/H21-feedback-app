import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

export const useFeedback = () => {
  const context = useContext(FeedbackContext);

  /* Checking if the context is undefined and if it is it will throw an error. */
  if (context === undefined) {
    throw new Error("useFeedback() is undefined");
  }

  return context;
};
