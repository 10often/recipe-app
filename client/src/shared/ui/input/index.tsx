import React, {
  ChangeEvent,
  KeyboardEvent,
  RefObject,
  useRef,
  useState,
} from "react";
import cx from "classnames";

interface IProps {
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export const Input = ({
  value,
  placeholder,
  onChange,
  onKeyPress,
  startAdornment,
  endAdornment,
}: IProps) => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLElement | null>(null);

  const handleClick = () => {
    setFocus(true);
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <div
      onClick={handleClick}
      onBlur={handleBlur}
      className={cx(
        "min-h-[40px] h-[40px] w-full bg-white flex items-center rounded-lg px-2 hover:outline hover:outline-1 hover:outline-pastel-mint shadow-lg",
        { "outline outline-1 outline-pastel-mint": focus }
      )}
    >
      {startAdornment}
      <input
        placeholder={placeholder}
        ref={inputRef as RefObject<HTMLInputElement>}
        className="ml-1 w-full focus-visible:outline-none"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        type="text"
      />
      {endAdornment}
    </div>
  );
};
