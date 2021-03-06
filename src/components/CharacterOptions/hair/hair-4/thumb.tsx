import React from "react";
import { defaultColor } from "../colors";
import { Colors } from "@/interfaces/Colors";

interface IProps {
	colors?: Colors;
}

const Hair4Thumb = ({ colors = defaultColor }: IProps = {}) => {
	const [color1, color2, color3] = colors;
	return (
		<svg version="1.1" x="0px" y="0px" viewBox="0 0 182 182">
			<path
				d="m121.3 11v-5.5h-5.5v-5.5h-5.5-5.5-5.5-5.5-5.6-5.5v5.5h5.5 5.6v5.5 5.5 5.6 5.5 5.5 5.5h5.5 5.5v5.5 5.5h5.5v5.6 5.5 5.5 5.5h5.5v5.5h-5.5-5.5v5.5h5.5 5.5v5.5h-5.5-5.5-5.5-5.5v-5.5-5.5h5.5v-5.5-5.5-5.5h-5.5-5.6-5.5v5.5 5.5h5.5v5.5 5.5 5.5 5.6h5.6 5.5v5.5h5.5 5.5 5.5v-5.5h5.5v-5.6h5.5v-5.5-5.5-5.5-5.5-5.5-5.5-5.6-5.5h-5.5v5.5 5.6 5.5h-5.5v-5.5-5.6-5.5-5.5h5.5 5.5v-5.5-5.5-5.5-5.6-5.5z"
				fill="#eaeaea"
			/>
			<path d="m115.8 55.2v5.5h5.5v-5.5-5.6h-5.5z" fill="#b5b5b5" />
			<path d="m115.8 44.1h5.5v5.5h-5.5z" fill="#d8d8d8" />
			<path d="m115.8 38.6v5.5h5.5 5.5v-5.5h-5.5z" fill="#b5b5b5" />
			<path d="m104.8 60.7v5.5 5.5h-5.5v5.5h5.5 5.5 5.5v-5.5h-5.5v-5.5-5.5-5.5-5.6h-5.5v5.6z" fill="#b5b5b5" />
			<path d="m99.3 49.6v5.6 5.5 5.5 5.5h5.5v-5.5-5.5-5.5-5.6-5.5h-5.5z" fill="#d8d8d8" />
			<path d="m93.8 93.8h-5.6v5.5h5.6 5.5v-5.5z" fill="#d8d8d8" />
			<path d="m93.8 82.7v5.5h5.5 5.5 5.5 5.5v-5.5h-5.5-5.5-5.5z" fill="#b5b5b5" />
			<path d="m93.8 77.2v5.5h5.5 5.5v-5.5h-5.5z" fill="#d8d8d8" />
			<path d="m99.3 49.6h-5.5v5.6 5.5h5.5v-5.5z" fill="#b5b5b5" />
			<path d="m99.3 44.1h-5.5-5.6v5.5h5.6 5.5z" fill="#eaeaea" />
			<path d="m88.2 44.1h5.6 5.5 5.5v-5.5h-5.5-5.5-5.6z" fill="#b5b5b5" />
			<path d="m82.7 93.8h5.5v5.5h-5.5z" fill="#b5b5b5" />
			<path
				d="m88.2 88.2v-5.5-5.5-5.5h-5.5v-5.5-5.5h5.5 5.6v-5.5-5.6h-5.6v-5.5-5.5h5.6v-5.5-5.5-5.5-5.6-5.5-5.5h-5.6-5.5v5.5h-5.5v5.5 5.6h-5.5v5.5 5.5 5.5 5.5 5.5h5.5v5.6 5.5 5.5 5.5 5.5 5.5h5.5v5.5 5.6h5.5z"
				fill="#d8d8d8"
			/>
			<path
				d="m82.7 82.7h-5.5v-5.5-5.5-5.5-5.5-5.5-5.6h-5.5v-5.5-5.5-5.5-5.5-5.5h5.5v-5.6-5.5h5.5v-5.5-5.5h-5.5v5.5h-5.5v5.5h-5.5v5.5h-5.5v5.6 5.5 5.5 5.5 5.5 5.5h5.5v5.6 5.5 5.5 5.5 5.5h5.5v5.5 5.5h5.5v5.6h5.5v-5.6z"
				fill="#b5b5b5"
			/>
			<path d="m66.2 60.7h-5.5v5.5 5.5h5.5v-5.5z" fill="#d8d8d8" />
			<path d="m66.2 55.2v-5.6h-5.5v5.6 5.5h5.5z" fill="#eaeaea" />
			<path
				d="m121.3 11v-5.5h-5.5v-5.5h-5.5-5.5-5.5-5.5-5.6-5.5-5.5v5.5h-5.5v5.5h-5.5v5.5h-5.5v5.6 5.5h-5.5v5.5 5.5 5.5 5.5 5.6 5.5 5.5 5.5 5.5 5.5 5.5 5.6 5.5 5.5 5.5 5.5 5.5h5.5v5.5 5.6 5.5 5.5h5.5v5.5 5.5 5.5h5.5v5.6 5.5 5.5 5.5h5.5v-5.5h5.5v-5.5-5.5-5.6-5.5-5.5-5.5-5.5-5.5-5.6-5.5-5.5-5.5-5.5-5.5-5.5-5.6-5.5-5.5-5.5-5.5-5.5-5.5-5.6h5.5v-5.5h5.6v-5.5h5.5v-5.5h5.5v-5.5h5.5v-5.5h5.5v-5.6h5.5v5.6h5.5v-5.6-5.5z"
				fill={color1}
			/>
			<path d="m115.8 99.3h-5.5-5.5v5.5h5.5v5.5h5.5 5.5v-5.5-5.5-5.5h-5.5z" fill={color1} />
			<path d="m110.3 99.3h-5.5v5.5h5.5v5.5h5.5v-5.5-5.5z" fill={color3} />
			<path d="m66.2 11h5.5v5.5h-5.5z" fill={color3} />
			<path
				d="m71.7 148.9v-5.5-5.5-5.5h-5.5v-5.6-5.5-5.5-5.5-5.5-5.5-5.5-5.6-5.5-5.5-5.5-5.5-5.5-5.5-5.6-5.5-5.5-5.5-5.5-5.5-5.6h-5.5v5.6 5.5h-5.5v5.5 5.5 5.5 5.5 5.6 5.5 5.5 5.5 5.5 5.5 5.5 5.6 5.5 5.5 5.5 5.5 5.5h5.5v5.5 5.6 5.5 5.5h5.5v5.5 5.5 5.5h5.5v5.6 5.5 5.5 5.5h5.5v-5.5-5.5-5.5-5.6-5.5h-5.5z"
				fill={color3}
			/>
			<g fill={color2}>
				<path d="m93.8 5.5h5.5v5.5h-5.5z" />
				<path d="m77.2 22.1h5.5v5.5h-5.5z" />
				<path d="m88.2 22.1h5.5v5.5h-5.5z" />
				<path d="m82.7 33.1h-5.5v5.5 5.5h5.5v-5.5h5.5v-5.5-5.5h-5.5z" />
				<path d="m99.3 11h5.5v5.5h-5.5z" />
				<path d="m88.2 11h5.5v5.5h-5.5z" />
				<path d="m82.7 16.5h5.5v5.5h-5.5z" />
				<path d="m93.8 16.5h5.5v5.5h-5.5z" />
				<path d="m71.7 38.6v-5.5h5.5v-5.5h-5.5v-5.5h5.5v-5.6h5.5v-5.5h5.5v-5.5h-5.5v-5.5h-5.5v5.5h-5.5v5.5 5.5h-5.5v5.6 5.5 5.5 5.5 5.5 5.5 5.6 5.5 5.5 5.5 5.5 5.5 5.5 5.6 5.5 5.5 5.5 5.5 5.5 5.5 5.6h5.5v5.5 5.5 5.5 5.5h5.5v5.5 5.6 5.5 5.5h5.5v-5.5-5.5-5.6-5.5-5.5h-5.5v-5.5-5.5-5.5-5.6h-5.5v-5.5-5.5-5.5-5.5-5.5-5.5-5.6-5.5-5.5-5.5-5.5-5.5-5.5h5.5v-5.6-5.5h-5.5z" />
			</g>
		</svg>
	);
};

export default Hair4Thumb;
