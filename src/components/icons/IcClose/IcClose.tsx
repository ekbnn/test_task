import { FC } from "react";
import { ICON_COLOR } from "@/constants";
import { IIconProps } from "@/types";

const IcClose: FC<IIconProps> = ({
  width = "21",
  height = "21",
  color = "red",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.5 0.5L19.5 19.5" stroke={ICON_COLOR[color]} />
      <path d="M19.5 0.5L0.5 19.5" stroke={ICON_COLOR[color]} />
    </svg>
  );
};

export default IcClose;
