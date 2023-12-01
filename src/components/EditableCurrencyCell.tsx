import React, { useState, ChangeEvent } from "react";
import editIcon from '../assets/edit.svg';
import useCurrencyStore from "../store/useCurrencyStore";

interface EditableCurrencyCellProps {
  value: number;
  cell: 'buy' | 'sale'
  ccy: string
}

const EditableCurrencyCell: React.FC<EditableCurrencyCellProps> = ({
  value,
  cell,
  ccy
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const {editedValue, setEditedValue, validationError, validateEditedValue, updateTableData} = useCurrencyStore()

  const handleEditIconClick = () => {
    setEditedValue(value);
    setIsEditing(true);
  };

  const handleSave = () => {
      validateEditedValue(editedValue);
      updateTableData(cell, ccy);

      setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedValue(value);
    setIsEditing(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      setEditedValue(newValue);
    }
  };

  return (
    <div className="flex space-x-2 w-full">
      {isEditing ? (
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={editedValue}
            onChange={handleInputChange}
            className="text-black rounded-sm bg-gray-200 px-1 w-32"
            min={value - value * 0.1}
            max={value + value * 0.1}
          />
          <button
            onClick={handleSave}
            className="px-2 bg-green-700 rounded-md disabled:bg-gray-600 disabled:text-gray-400"
            disabled={
              editedValue < value - value * 0.1 ||
              editedValue > value + value * 0.1
            }
          >
            Save
          </button>
          <button onClick={handleCancel} className="px-2 bg-red-700 rounded-md">
            Cancel
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2">
          <span>{isEditing ? editedValue : value} </span>
          <button
            onClick={handleEditIconClick}
            className="hidden group-hover:inline-block px-4"
          >
            <img src={editIcon} alt="Edit Icon" className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default EditableCurrencyCell;