import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

import { useFeedback } from "../hooks/useFeedback";

const FeedbackList = ({ handleClick }) => {
  const { feedback } = useFeedback();

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback found</p>;
  }
  return (
    <AnimatePresence>
      <div className="feedback-list">
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} handleClick={handleClick} />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default FeedbackList;
