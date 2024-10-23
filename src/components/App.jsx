import { Box, Stack, Typography } from '@mui/material';
import StatsBar from './StatsBar';
import { useState } from 'react';

const App = () => {
	const [positive, setPositive] = useState(0);
	const [negative, setNegative] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [total, setTotal] = useState(0);

	const calculatePercentage = (a, b) => {
		return Math.round((a / b) * 100);
	};

	const handlePositive = () => {
		setPositive(positive + 1);
		setTotal(total + 1);
	};

	const handleNegative = () => {
		setNegative(negative + 1);
		setTotal(total + 1);
	};

	const handleNeutral = () => {
		setNeutral(neutral + 1);
		setTotal(total + 1);
	};

	return (
		<Box
			sx={{
				width: 550,
				p: 2,
				border: '1px solid black',
				borderRadius: 2,
			}}
		>
			<Stack spacing={2}>
				{total > 0 ? (
					<Typography sx={{ textAlign: 'center' }} variant='h4'>
						Ratings
					</Typography>
				) : (
					<Typography sx={{ textAlign: 'center' }} variant='h4'>
						No ratings yet, please click the corresponding bar
					</Typography>
				)}
				<StatsBar
        clicked={handlePositive}
					total={total}
					nr={calculatePercentage(positive, total)}
					title='Positive'
					color='success'
				/>
				<StatsBar
        clicked={handleNeutral}
					total={total}
					nr={calculatePercentage(neutral, total)}
					title='Neutral'
					color='warning'
				/>
				<StatsBar
        clicked={handleNegative}
					total={total}
					nr={calculatePercentage(negative, total)}
					title='Negative'
					color='error'
				/>
			</Stack>
		</Box>
	);
};
export default App;
