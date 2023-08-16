/** @format */

import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	background: #fafafa;
	.container-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 10px 0 10px;
		.logo h3 {
			font-size: 8vw;
		}
		.search {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const SubHeader = styled.div`
	margin: 10px;
	.container-subHeader {
		display: flex;
		align-items: center;
		white-space: nowrap;
		overflow-x: auto;
		margin: 10px 0 15px 0;
		gap: 15px;
	}
	.container-subHeader h3 {
		font-size: 7vw;
		color: rgba(90, 90, 90, 1);
		font-weight: 700;
		cursor: pointer;
	}
`;

export const Main = styled.main`
	display: flex;
`;
export const VerticalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 15px;
	transform: rotate(-180deg);
	margin: 0 25px 0 5px;
	h3 {
		writing-mode: vertical-lr;
		word-spacing: 5px;
		text-orientation: mixed;
		white-space: nowrap;
		font-size: 6vw;
		color: rgba(90, 90, 90, 1);
		cursor: pointer;
	}
`;

export const PaletComponents = styled.div`
	width: 100%;
`;
export const PaletScroll = styled.div`
	display: flex;
	/* align-items: center; */
	overflow-x: auto;
`;
export const PaletContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 45px;
`;
export const Palet = styled.div`
	width: 230px;
	height: 310px;
	border-radius: 30px;
	.header-palet {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.text-palet {
			display: flex;
			flex-direction: column;
			margin: 10px 0 0 15px;
			.title-palet {
				color: rgba(100, 100, 100, 1);
				font-size: 5vw;
				font-weight: 700;
			}
			.name-palet {
				color: rgba(180, 180, 180, 1);
				font-size: 6vw;
				font-weight: 800;
			}
			.value-palet {
				color: rgba(135, 135, 135, 1);
				font-size: 4vw;
				font-weight: 500;
			}
		}
		.btn-heart {
			border: none;
			position: relative;
			right: 10px;
			bottom: 10px;
			color: #fff;
		}
	}
	.tenis-palet {
		position: relative;
		margin: 0 0;
	}
	.tenis-palet img {
		width: 260px;
		transform: rotate(-15deg);
	}
	.icon-palet {
		display: flex;
		position: relative;
		top: 45px;
		left: 180px;
		color: #fff;
	}
`;

export const StoreCompilation = styled.div`
	width: 100%;
	margin: 30px 0 0 0;
	.header-store {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 15px;
		.title-store {
			font-size: 7vw;
			font-weight: 600;
		}
	}
`;

export const StoreScroll = styled.div`
	display: flex;
	align-items: center;
	overflow-x: auto;
`;

export const StoreContainer = styled.div`
	margin: 30px 0 0 0;
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const Store = styled.div`
	width: 170px;
	height: 180px;
	border-radius: 15px;
	background: rgba(225, 225, 225, 1);
	margin: 0 0 0 15px;
	.header-store-box {
		display: flex;
		justify-content: space-between;
		color: rgba(100, 100, 100, 1);
		.text-store {
			border-radius: 0 0 15px 0;
			transform: rotate(-180deg);
			background: rgba(255, 0, 0, 1);
			padding: 5px;
		}
		.text-store h3 {
			writing-mode: vertical-lr;
			word-spacing: 5px;
			text-orientation: mixed;
			line-height: 25px;
			white-space: nowrap;
			font-size: 6vw;
			color: rgba(235, 235, 235, 1);
			cursor: pointer;
		}
	}
	.photo-store {
		transform: rotate(-10deg);
		position: relative;
		bottom: 30px;
		left: 10px;
	}
	.photo-store img {
		width: 140px;
	}
	.footer-store {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		bottom: 10px;
	}
	.footer-store h3 {
		font-size: 5vw;
		font-weight: 800;
		color: rgba(80, 80, 80, 1);
	}
	.footer-store span {
		font-size: 4vw;
		font-weight: 400;
		color: rgba(135, 135, 135, 1);
	}
`;

export const Footer = styled.footer`
	position: fixed;
	background: #fff;
	width: 100%;
	height: 50px;
	.footer-container {
		margin-top: 10px;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
`;
