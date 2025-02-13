import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HomeList = () => {
	const roseRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		if (roseRef.current) {
			const tl = gsap.timeline();

			tl.fromTo(
				".stem",
				{ opacity: 0, y: 50 },
				{ opacity: 1, y: 0, duration: 1.5 }
			)
				.fromTo(
					".petal",
					{ scale: 0 },
					{ scale: 1, duration: 2, stagger: 0.3, ease: "elastic.out(1, 0.5)" }
				)
				.fromTo(
					".leaf",
					{ opacity: 0, scale: 0.5 },
					{ opacity: 1, scale: 1, duration: 1, stagger: 0.2 }
				);
		}
	}, []);

	return (
		<div className="flex justify-center items-center h-screen bg-pink-100">
			<svg
				ref={roseRef}
				width="200"
				height="300"
				viewBox="0 0 200 300"
				xmlns="http://www.w3.org/2000/svg"
			>
				{/* Stem */}
				<rect
					className="stem"
					x="95"
					y="150"
					width="10"
					height="150"
					fill="green"
				/>

				{/* Petals (Blooming Effect) */}
				<path
					className="petal"
					d="M100 100 C 80 80, 60 60, 50 90 C 40 120, 60 140, 100 150"
					fill="red"
				/>
				<path
					className="petal"
					d="M100 100 C 120 80, 140 60, 150 90 C 160 120, 140 140, 100 150"
					fill="red"
				/>
				<path
					className="petal"
					d="M100 100 C 80 120, 60 140, 50 110 C 40 80, 60 60, 100 50"
					fill="red"
				/>
				<path
					className="petal"
					d="M100 100 C 120 120, 140 140, 150 110 C 160 80, 140 60, 100 50"
					fill="red"
				/>

				{/* Leaves */}
				<ellipse
					className="leaf"
					cx="75"
					cy="200"
					rx="20"
					ry="10"
					fill="green"
				/>
				<ellipse
					className="leaf"
					cx="125"
					cy="200"
					rx="20"
					ry="10"
					fill="green"
				/>
			</svg>
		</div>
	);
};

export default HomeList;
