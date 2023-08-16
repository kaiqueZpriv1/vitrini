/** @format */
import React, { useState } from "react";
import "./App.css";
import "./assets/styled.js";
import ImageComponents from "./assets/components/ImageComponents";

import {
	Footer,
	Header,
	Main,
	PaletComponents,
	PaletContainer,
	PaletScroll,
	StoreCompilation,
	StoreContainer,
	StoreScroll,
	SubHeader,
	VerticalContainer,
} from "./assets/styled.js";
import {
	AiOutlineSearch,
	AiFillBell,
	AiOutlineArrowRight,
	AiOutlineHome,
	AiOutlineStar,
	AiOutlineUser,
} from "react-icons/ai";
import StoreComponents from "./assets/components/StoreComponents";
function App() {
	const [touchStartX, setTouchStartX] = useState(null);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleTouchStart = (e) => {
		setTouchStartX(e.touch[0].clientX);
	};
	const handleTouchMove = (e) => {
		if (touchStartX !== null) {
			const touchMoveX = e.touch[0].clientX;
			const scrollAmont = touchStartX - touchMoveX;
			setScrollLeft(scrollLeft + scrollAmont);
			setTouchStartX(touchMoveX);
		}
	};

	const handleTouchEnd = () => {
		setTouchStartX(null);
	};

	const [clickText, setClickText] = useState(null);
	const handleText = (text) => {
		setClickText(text);
	};
	return (
		<div className='App'>
			<Header>
				<div className='container-header'>
					<div className='logo'>
						<h3>Discover</h3>
					</div>
					<div className='search'>
						<AiOutlineSearch size={30} />
						<AiFillBell size={30} />
					</div>
				</div>
				<SubHeader>
					<div
						className='container-subHeader'
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}>
						<h3
							onClick={() => handleText("Nike")}
							style={{
								color: clickText === "Nike" ? "#000" : "rgba(90, 90, 90, 1)",
							}}>
							Nike
						</h3>
						<h3
							onClick={() => handleText("Adidas")}
							style={{
								color: clickText === "Adidas" ? "#000" : "rgba(90, 90, 90, 1)",
							}}>
							Adidas
						</h3>
						<h3
							onClick={() => handleText("Puma")}
							style={{
								color: clickText === "Puma" ? "#000" : "rgba(90, 90, 90, 1)",
							}}>
							Puma
						</h3>
						<h3
							onClick={() => handleText("Gucci")}
							style={{
								color: clickText === "Gucci" ? "#000" : "rgba(90, 90, 90, 1)",
							}}>
							Gucci
						</h3>
						<h3
							onClick={() => handleText("Mizuno")}
							style={{
								color: clickText === "Mizuno" ? "#000" : "rgba(90, 90, 90, 1)",
							}}>
							Mizuno
						</h3>
						<h3
							onClick={() => handleText("Street")}
							style={{
								color: clickText === "Street" ? "#000" : "rgba(90, 90, 90, 1)",
							}}>
							Street
						</h3>
					</div>
				</SubHeader>
			</Header>
			<Main>
				<VerticalContainer>
					<h3
						onClick={() => handleText("NEW")}
						style={{
							color: clickText === "NEW" ? "#000" : "rgba(90, 90, 90, 1)",
						}}>
						NEW
					</h3>
					<h3
						onClick={() => handleText("FEATURED")}
						style={{
							color: clickText === "FEATURED" ? "#000" : "rgba(90, 90, 90, 1)",
						}}>
						FEATURED
					</h3>
					<h3
						onClick={() => handleText("UPCOMING")}
						style={{
							color: clickText === "UPCOMING" ? "#000" : "rgba(90, 90, 90, 1)",
						}}>
						UPCOMING
					</h3>
				</VerticalContainer>
				<PaletComponents>
					<PaletScroll
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}>
						<PaletContainer>
							<ImageComponents />
						</PaletContainer>
					</PaletScroll>
				</PaletComponents>
			</Main>
			<StoreCompilation>
				<div className='header-store'>
					<h3 className='title-store'>More</h3>
					<AiOutlineArrowRight size={25}></AiOutlineArrowRight>
				</div>
				<StoreScroll>
					<StoreContainer>
						<StoreComponents />
					</StoreContainer>
				</StoreScroll>
			</StoreCompilation>
			<Footer>
				<div className='footer-container'>
					<AiOutlineHome
						onClick={() => handleText("AiOutlineHome")}
						style={{
							color:
								clickText === "AiOutlineHome"
									? "#ff0000"
									: "rgba(90, 90, 90, 1)",
						}}
						size={30}
					/>
					<AiOutlineStar
						onClick={() => handleText("AiOutlineStar")}
						style={{
							color:
								clickText === "AiOutlineStar"
									? "#ff0000"
									: "rgba(90, 90, 90, 1)",
						}}
						size={30}
					/>
					<AiOutlineUser
						onClick={() => handleText("AiOutlineUser")}
						style={{
							color:
								clickText === "AiOutlineUser"
									? "#ff0000"
									: "rgba(90, 90, 90, 1)",
						}}
						size={30}
					/>
				</div>
			</Footer>
		</div>
	);
}

export default App;
