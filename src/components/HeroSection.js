import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video src="/videos/video-1.mp4" autoPlay loop muted></video>
			<h1>Developer Web</h1>
			<p>Phùng Hoàng Phú Lộc</p>
			<div className="hero-btns">
				<Button
					className="btn"
					buttonStyle="btn-outline"
					buttonSize="btn--large"
				>
					GET START
				</Button>
				<Button
					className="btn"
					buttonStyle="btn-primary"
					buttonSize="btn--large"
				>
					WATCH VIDEO
					<i className="far fa-play-circle" />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
