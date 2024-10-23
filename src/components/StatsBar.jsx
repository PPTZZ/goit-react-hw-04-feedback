import { Box, LinearProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const StatsBar = ({ nr, color, title, total, clicked }) => {
	return (
		<Box
			sx={{ borderRadius: 1, overflow: 'hidden', border: '1px solid #b1b1b1' }}
		>
			<Box sx={{ position: 'absolute', zIndex: 1, display:'flex', gap:2 }}>
				<Typography variant='h4' >
					{title}
				</Typography>
				{total > 0 ? <Typography variant='h4'>{nr}%</Typography> : null}
			</Box>
			<LinearProgress
				onClick={clicked}
				variant='determinate'
				value={nr}
				color={color}
				sx={{
					height: '40px',
					'&:hover': {
						cursor: 'pointer',
					},
				}}
			/>
		</Box>
	);
};

StatsBar.propTypes = {
	nr: PropTypes.number,
	total: PropTypes.number,
	color: PropTypes.string,
	title: PropTypes.string,
	clicked: PropTypes.func,
};
export default StatsBar;
