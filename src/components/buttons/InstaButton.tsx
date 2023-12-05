import React from 'react'

interface InstaButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
  action: () => void;
}

const InstaButton: React.FC<InstaButtonProps> = ({
    label,
    type,
    action
}) => {
  return (
    <div className="flex flex-col gap-x-2 gap-y-4 pt-4 md:flex-row md:justify-center">
      <button
        className="dark:text-new-black dark:bg-pixel-blue bg-new-black text-white not-disabled:hover:opacity-[0.85] disabled:text-dark-gray font-text flex items-center justify-center rounded-[0.25rem] no-underline text-center
    uppercase transition-all disabled:cursor-not-allowed disabled:opacity-50 min-w-[15rem] text-lg h-16 gap-4 px-6 w-full"
        type={type}
      >
        {label}
      </button>
    </div>
  );
}

export default InstaButton