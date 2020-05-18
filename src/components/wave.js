import React, { useState } from 'react';
import { css } from '@emotion/core';


const Wave = () => {
	const [waves, setWaves] = useState(0);
	const label = `🎉 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

	return (
		<button css={css`
			padding: 1rem;
			background: rebeccapurple;
			border: none;
			color: white;
			font-size: 1.25rem;
			cursor: pointer;
			min-width: 150px;
		`}
			onClick={() => setWaves(waves + 1)}
		>
			{label}
		</button>
	)
};

export default Wave;