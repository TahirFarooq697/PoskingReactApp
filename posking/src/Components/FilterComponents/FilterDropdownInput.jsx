import React from 'react';

const FilterDropdownInput = ({label,  options = []}) => {
  return (
    <div class="flex flex-col">
    <label class="text-sm font-medium text-secondry mb-1">{label}</label>
    <select name="category" class="border border-gray-300 rounded-md p-2">
      <option value="">--</option>
      {options.map((opt, index) => (
          <option key={index} value={opt.value}>{opt.label}</option>
        ))}
    </select>
  </div>
  );
}

export default FilterDropdownInput;
