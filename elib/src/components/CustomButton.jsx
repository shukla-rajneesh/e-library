const CustomButton = ({ disabled, isRounded }) => {
  return (
    // <button
    //   className={`text-sm ${disabled ? "bg-gray-300" : "bg-blue-500"} ${
    //     isRounded && "rounded-full"
    //   } p-4`}
    // >
    //   Hello
    // </button>

    <button
      className={cn(
        "test-sm",
        disabled ? "bg-gray-200" : "bg-blue-500",
        isRounded && "rounded-full",
        "p-4"
      )}
    >
      Hello
    </button>
  );
};

export default CustomButton;
