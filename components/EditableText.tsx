
import React, { useState, useRef, useEffect, useCallback } from 'react';

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const EditableText: React.FC<EditableTextProps> = ({ value, onChange, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditing]);

  const handleBlur = useCallback(() => {
    setIsEditing(false);
    onChange(currentValue);
  }, [currentValue, onChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleBlur();
    } else if (e.key === 'Escape') {
      setCurrentValue(value);
      setIsEditing(false);
    }
  }, [handleBlur, value]);

  const handleClick = useCallback(() => {
      setIsEditing(true);
  }, []);

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        type="text"
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`${className} bg-yellow-100 border border-yellow-400 outline-none p-0 m-0`}
        style={{ width: `${Math.max(10, currentValue.length + 2)}ch` }}
      />
    );
  }

  return (
    <div
      onClick={handleClick}
      className={`${className} cursor-pointer hover:bg-yellow-100 transition-colors duration-200 rounded-sm px-1 -mx-1`}
      title="Click to edit"
    >
      {value || <span className="text-gray-400">(empty)</span>}
    </div>
  );
};

export default EditableText;
