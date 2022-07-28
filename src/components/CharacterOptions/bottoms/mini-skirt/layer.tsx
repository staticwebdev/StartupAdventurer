import React from "react";
import { defaultColor } from "./colors";
import { Colors } from "@/interfaces/Colors";

interface IProps {
	colors?: Colors;
}

const MiniSkirt = ({ colors = defaultColor }: IProps = {}) => {
	const [color1, color2, color3] = colors;
	return (
		<g id="mini-skirt">
			<polygon
				fill={color1}
				points="460.94 570 450.94 570 440.94 570 440.94 580 430.94 580 420.94 580 410.94 580 400.94 580 390.94 580 380.94 580 370.94 580 360.94 580 350.94 580 340.94 580 330.94 580 320.94 580 310.94 580 310.94 590 320.94 590 320.94 600 320.94 610 320.94 620 310.94 620 310.94 630 320.94 630 320.94 640 330.94 640 330.94 650 330.94 660 320.94 660 310.94 660 300.94 660 300.94 670 300.94 680 300.94 690 300.94 700 300.94 710 300.94 720 300.94 730 290.94 730 290.94 740 300.94 740 310.94 740 320.94 740 330.94 740 340.94 740 350.94 740 360.94 740 370.94 740 380.94 740 390.94 740 400.94 740 410.94 740 420.94 740 430.94 740 440.94 740 450.94 740 460.94 740 470.94 740 470.94 730 470.94 720 470.94 710 470.94 700 470.94 690 470.94 680 470.94 670 470.94 660 470.94 650 470.94 640 470.94 630 470.94 620 470.94 610 470.94 600 470.94 590 470.94 580 470.94 570 460.94 570"
			/>
			<polygon
				fill={color2}
				points="460.94 570 450.94 570 440.94 570 440.94 580 450.94 580 460.94 580 470.94 580 470.94 570 460.94 570"
			/>
			<polygon
				fill={color2}
				points="420.94 580 410.94 580 400.94 580 390.94 580 380.94 580 370.94 580 360.94 580 350.94 580 340.94 580 330.94 580 320.94 580 320.94 590 320.94 600 320.94 610 320.94 620 320.94 630 320.94 640 330.94 640 330.94 650 330.94 660 320.94 660 320.94 670 320.94 680 320.94 690 320.94 700 320.94 710 310.94 710 310.94 720 310.94 730 310.94 740 320.94 740 330.94 740 330.94 730 340.94 730 340.94 720 340.94 710 340.94 700 340.94 690 340.94 680 340.94 670 340.94 660 340.94 650 340.94 640 350.94 640 350.94 630 350.94 620 350.94 610 350.94 600 360.94 600 360.94 590 370.94 590 380.94 590 390.94 590 400.94 590 410.94 590 420.94 590 430.94 590 440.94 590 440.94 580 430.94 580 420.94 580"
			/>
			<rect fill={color3} x="310.94" y="620" width="10" height="10" />
			<rect fill={color3} x="310.94" y="580" width="10" height="10" />
			<polygon
				fill={color3}
				points="300.94 660 300.94 670 300.94 680 300.94 690 300.94 700 300.94 710 300.94 720 300.94 730 290.94 730 290.94 740 300.94 740 310.94 740 310.94 730 310.94 720 310.94 710 320.94 710 320.94 700 320.94 690 320.94 680 320.94 670 320.94 660 310.94 660 300.94 660"
			/>
		</g>
	);
};

export default MiniSkirt;
