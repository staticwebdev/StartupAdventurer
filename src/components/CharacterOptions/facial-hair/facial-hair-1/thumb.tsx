import React from "react";
import { defaultColor } from "../colors";
import { Colors } from "@/interfaces/Colors";

interface IProps {
	colors?: Colors;
}

const FacialHair1Thumb = ({ colors = defaultColor }: IProps = {}) => {
	const [color1, color2, color3] = colors;

	return (
		<svg version="1.1" x="0px" y="0px" viewBox="0 0 182 182">
			<path
				d="m141.6 20.2v-10.1h-10.2v-10.1h-10.1-10.1-10.1-10.1-10.1-10.1v10.1h10.1 10.1v10.1 10.1 10.1 10.2 10.1 10.1h10.1 10.1v10.1 10.1h10.1v10.1 10.1 10.1 10.1h10.1v10.2h-10.1-10.1v10.1h10.1 10.1v10.1h-10.1-10.1-10.1-10.1v-10.1-10.1h10.1v-10.2-10.1-10.1h-10.1-10.1-10.1v10.1 10.1h10.1v10.2 10.1 10.1 10.1h10.1 10.1v10.1h10.1 10.1 10.1v-10.1h10.2v-10.1h10.1v-10.1-10.1-10.2-10.1-10.1-10.1-10.1-10.1h-10.1v10.1 10.1 10.1h-10.2v-10.1-10.1-10.1-10.1h10.2 10.1v-10.1-10.1-10.2-10.1-10.1z"
				fill="#eaeaea"
			/>
			<path d="m131.4 101.1v10.1h10.2v-10.1-10.1h-10.2z" fill="#b5b5b5" />
			<path d="m131.4 80.9h10.1v10.1h-10.1z" fill="#d8d8d8" />
			<path d="m131.4 70.8v10.1h10.2 10.1v-10.1h-10.1z" fill="#b5b5b5" />
			<path
				d="m111.2 111.2v10.1 10.1h-10.1v10.2h10.1 10.1 10.1v-10.2h-10.1v-10.1-10.1-10.1-10.1h-10.1v10.1z"
				fill="#b5b5b5"
			/>
			<path d="m101.1 91v10.1 10.1 10.1 10.1h10.1v-10.1-10.1-10.1-10.1-10.1h-10.1z" fill="#d8d8d8" />
			<path d="m91 171.9h-10.1v10.1h10.1 10.1v-10.1z" fill="#d8d8d8" />
			<path d="m91 151.7v10.1h10.1 10.1 10.1 10.1v-10.1h-10.1-10.1-10.1z" fill="#b5b5b5" />
			<path d="m91 141.6v10.1h10.1 10.1v-10.1h-10.1z" fill="#d8d8d8" />
			<path d="m101.1 91h-10.1v10.1 10.1h10.1v-10.1z" fill="#b5b5b5" />
			<path d="m101.1 80.9h-10.1-10.1v10.1h10.1 10.1z" fill="#eaeaea" />
			<path d="m80.9 80.9h10.1 10.1 10.1v-10.1h-10.1-10.1-10.1z" fill="#b5b5b5" />
			<path d="m70.8 171.9h10.1v10.1h-10.1z" fill="#b5b5b5" />
			<path
				d="m80.9 161.8v-10.1-10.1-10.2h-10.1v-10.1-10.1h10.1 10.1v-10.1-10.1h-10.1v-10.1-10.1h10.1v-10.1-10.1-10.2-10.1-10.1-10.1h-10.1-10.1v10.1h-10.1v10.1 10.1h-10.1v10.2 10.1 10.1 10.1 10.1h10.1v10.1 10.1 10.1 10.1 10.2 10.1h10.1v10.1 10.1h10.1z"
				fill="#d8d8d8"
			/>
			<path
				d="m70.8 151.7h-10.1v-10.1-10.2-10.1-10.1-10.1-10.1h-10.1v-10.1-10.1-10.1-10.1-10.2h10.1v-10.1-10.1h10.1v-10.1-10.1h-10.1v10.1h-10.1v10.1h-10.2v10.1h-10.1v10.1 10.2 10.1 10.1 10.1 10.1h10.1v10.1 10.1 10.1 10.1 10.2h10.2v10.1 10.1h10.1v10.1h10.1v-10.1z"
				fill="#b5b5b5"
			/>
			<path d="m40.4 111.2h-10.1v10.1 10.1h10.1v-10.1z" fill="#d8d8d8" />
			<path d="m40.4 101.1v-10.1h-10.1v10.1 10.1h10.1z" fill="#eaeaea" />
			<path d="m141.6 141.6v10.1h-10.2-10.1-10.1-10.1-10.1v-10.1h10.1 10.1 10.1 10.1z" fill={color1} />
			<path d="m121.3 141.6h-10.1v10.1h10.1 10.1v-10.1z" fill={color2} />
			<path d="m101.1 141.6h-10.1v10.1h10.1 10.1v-10.1z" fill={color3} />
		</svg>
	);
};

export default FacialHair1Thumb;
