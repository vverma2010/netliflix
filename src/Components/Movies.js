import React from 'react';
import MovieCard from './MovieCard';

const Movies = (props) => {
	const { originals } = props;
	return (
		<div>
            <div>{originals.map((original) => {
                return (
                    <MovieCard original={original} />
                );
            })}</div>
		</div>
	);
};

export default Movies;
