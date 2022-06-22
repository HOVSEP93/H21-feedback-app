import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

import Card from "./shared/Card";

import { useFeedback } from "../hooks/useFeedback";

const FeedbackItem = ({ item }) => {
  const { handleDelete, editFeedback } = useFeedback();

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
