import React from "react";

const EmptyState = ({ filter = "all" }) => {
  const getMessage = () => {
    switch (filter) {
      case "active":
        return {
          title: "No active todos",
          description: "All your todos are completed! Great job!",
          icon: "🎉",
        };
      case "completed":
        return {
          title: "No completed todos",
          description: "Start completing your todos to see them here.",
          icon: "📝",
        };
      default:
        return {
          title: "No todos yet",
          description: "Add your first todo to get started!",
          icon: "✨",
        };
    }
  };

  const { title, description, icon } = getMessage();

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 max-w-md">{description}</p>
    </div>
  );
};

export default EmptyState;
