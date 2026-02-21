"use client";

import { formatDistanceToNow } from "date-fns";
import React from "react";

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  return (
    <div className="w-full rounded-2xl bg-white p-4 shadow-md hover:shadow-lg transition">
      {/* Message */}
      <p className="text-gray-800 text-base">
        {feedback.message}
      </p>

      {/* Date */}
      <p className="mt-2 text-sm text-gray-500">
        {formatDistanceToNow(new Date(feedback.date), {
          addSuffix: true,
        })}
      </p>

      {/* Actions */}
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => onUpdate(feedback)}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
        >
          Update
        </button>

        <button
          onClick={() => onDelete(feedback._id)}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;