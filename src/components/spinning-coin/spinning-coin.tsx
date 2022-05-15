import React from 'react';
import SpinningCoinInterface from './spinning-coin.interface';
import { Coin, CoinContainer, CoinImage } from './spinning-coin.style';

const SpinningCoin = (props: SpinningCoinInterface) => {
	return (
		<CoinContainer>
			<Coin
				faceColor={props.faceColor}
				borderColor={props.borderColor}
				duration={props.duration}
			>
				<CoinImage coinImage={props.coinImage} />
			</Coin>
		</CoinContainer>
	);
};

export default SpinningCoin;
