import React from "react";

const TodoFilter = ({ filter, onFilterChange, counts }) => {
  const filters = [
    { key: "all", label: "All", count: counts.all },
    { key: "active", label: "Active", count: counts.active },
    { key: "completed", label: "Completed", count: counts.completed },
  ];

  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`filter-btn ${
            filter === key ? "active" : "inactive"
          } flex items-center gap-2`}
        >
          {label}
          <span className="bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs font-medium">
            {count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
