import React from "react";
import { ScrollContainer } from "./styles";

interface IProps {
	children: React.ReactChildren | React.ReactChild | any;
}

const HorizontalScroller = ({ children }: IProps) => {
	return <ScrollContainer>{children}</ScrollContainer>;
};

export default HorizontalScroller;
