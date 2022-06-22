import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

/* Creating a context. */
export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  /* Creating a state called feedback and setting it to an array of objects. */
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This is feedback item 1", rating: 7 },
    { id: 2, text: "This is feedback item 2", rating: 8 },
    { id: 3, text: "This is feedback item 3", rating: 3 },
    { id: 4, text: "This is feedback item 4", rating: 2 },
    { id: 5, text: "This is feedback item 5", rating: 10 },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  /**
   * The handleDelete function takes an id as an argument and returns a new array of feedback items that
   * do not have the same id as the argument.
   * @param id - the id of the feedback item to be deleted
   */
  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  /**
   * The function takes in a newFeedback object, assigns it a unique id, and then adds it to the
   * feedback array.
   * @param newFeedback - the new feedback object that is passed in from the form
   */
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  /**
   * When the editFeedback function is called, it sets the feedbackEdit state to the item that was passed
   * in and sets the edit state to true.
   * @param item - the item that is being edited
   */
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update the feedback
  const updateFeedback = (id, updItem) => {
    console.log(id, updItem);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
