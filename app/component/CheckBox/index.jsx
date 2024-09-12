import React from 'react';

const Checkbox = ({ label, checked, onChange, id }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
      />
      {label && (
        <label htmlFor={id} className="text-sm text-gray-700">
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;

