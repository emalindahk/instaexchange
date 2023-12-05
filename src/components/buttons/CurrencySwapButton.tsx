const CurrencySwapButton = () => {
  return (
    <div className="relative mt-0 mb-3 flex items-center justify-center md:my-0">
      <div className="dark:bg-new-black bg-white absolute z-10 rounded-full">
        <button
          className="dark:text-white text-new-black dark:border-white bg-white
        dark:bg-new-black dark:focus:shadow-outline-white focus:shadow-outline-new-black flex h-12
        w-12 items-center justify-center rounded-full border p-3 disabled:cursor-not-allowed group"
        >
          <svg
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 rotate-90 transition-all duration-500 ease-in-out sm:group-hover:-rotate-90 sm:group-hover:opacity-80 sm:group-focus:-rotate-90 sm:group-focus:opacity-80"
          >
            <path
              d="M16.4861 8.29883L1.49874 8.29883"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M12.8788 13.3657L16.622 9.62247C16.8931 9.35137 17.0454 8.98369 17.0454 8.6003L17.0454 8.01214C17.0454 7.62875 16.8931 7.26106 16.622 6.98997L12.8788 3.24671"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CurrencySwapButton;
