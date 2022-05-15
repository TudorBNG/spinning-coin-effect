# Spinning Coin Effect

This package will allow you to set a 3D spinning coin effect on your images.

## Installation

```bash
$ npm install @tudorbng/spinning-coin-effect
```

## Usage

```javascript
import { SpinningCoin } from '@tudorbng/spinning-coin-effect';

const CustomLogo = () => {
	return (
		<div className={'logo-container--dimensions'}>
			<SpinningCoin
				coinImage={image}
				borderColor={'#333'}
				faceColor={'gray'}
				duration={3}
			/>
		</div>
	);
};

export default CustomLogo;
```
