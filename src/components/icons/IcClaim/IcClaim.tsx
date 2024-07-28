import { FC } from "react";
import { ICON_COLOR } from "@/constants";
import { IIconProps } from "@/types";

const IcClaim: FC<IIconProps> = ({
  width = "22",
  height = "22",
  color = "blue",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 4V14M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke={ICON_COLOR[color]}
      />
      <path d="M10.5 15H11.5V17H10.5V15Z" fill={ICON_COLOR[color]} />
    </svg>
  );
};

export default IcClaim;
