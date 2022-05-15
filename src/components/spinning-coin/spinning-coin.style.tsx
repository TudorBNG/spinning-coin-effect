import styled from 'styled-components';
import { keyframes } from 'styled-components';
import SpinningCoinInterface from './spinning-coin.interface';

const spin = keyframes`
	0% {
		width: 100%;
		box-shadow: 0 0 0 #111;
		animation-timing-function: ease-in;
	}

	49.999% {
		width: 0.1rem;
		box-shadow: 0.05rem 0 0 var(--side), 0.1rem 0 0 var(--side),
			0.15rem 0 0 var(--side), 0.2rem 0 0 var(--side), 0.25rem 0 0 var(--side),
			0.3rem 0 0 var(--side), 0.35rem 0 0 var(--side), 0.4rem 0 0 var(--side),
			0.45rem 0 0 var(--side), 0.5rem 0 0 var(--side), 0.55rem 0 0 var(--side),
			0.6rem 0 0 var(--side), 0.65rem 0 0 var(--side), 0.7rem 0 0 var(--side),
			0.75rem 0 0 var(--side);
		transform: translateX(-0.375rem);
		background-color: #111;
		animation-timing-function: linear;
	}

	50.001% {
		width: 0.1rem;
		box-shadow: -0.05rem 0 0 var(--side), -0.1rem 0 0 var(--side),
			-0.15rem 0 0 var(--side), -0.2rem 0 0 var(--side),
			-0.25rem 0 0 var(--side), -0.3rem 0 0 var(--side),
			-0.35rem 0 0 var(--side), -0.4rem 0 0 var(--side),
			-0.45rem 0 0 var(--side), -0.5rem 0 0 var(--side),
			-0.55rem 0 0 var(--side), -0.6rem 0 0 var(--side),
			-0.65rem 0 0 var(--side), -0.7rem 0 0 var(--side),
			-0.75rem 0 0 var(--side);
		transform: translateX(0.375rem);
		background-color: #111;
		animation-timing-function: ease-out;
	}

	100% {
		width: 100%;
		box-shadow: 0 0 0 #111;
	}
`;

export const CoinContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

export const Coin = styled.div<SpinningCoinInterface>`
	--side: ${(props: any) => (props.borderColor ? props.borderColor : '#333')};
	--coin-face: ${(props: any) => props.coinImage};

	cursor: pointer;
	display: block;
	position: relative;
	height: 100%;
	width: 100%;
	border-radius: 50%;
	background-color: ${(props: any) =>
		props.faceColor ? props.faceColor : 'transparent'};
	animation: ${spin} linear infinite;
	animation-duration: ${(props: any) => (props.duration ? props.duration : 5)}s;
	background-size: 100% 100%;
	background-position: center;
	background-blend-mode: overlay;
`;

export const CoinImage = styled.div<SpinningCoinInterface>`
	display: block;
	position: relative;
	height: 100%;
	width: 100%;
	background-image: url(${(props: any) => props.coinImage});
	background-size: 100% 100%;
	background-position: center;
	background-blend-mode: overlay;
`;
