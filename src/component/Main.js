import React from 'react';
import styled from 'styled-components';
import SearchInputContainer from '../container/SearchInputContainer';
import ContentContainer from '../container/content/ContentContainer';

const MainBlock = styled.div`
	min-height: 100vh;
`;

const Wrap = styled.div`
	width: 100%;
	margin: 0 auto;
	text-align: center;
	padding-top: 5rem;
`;

const Main = ({ background }) => {
	if (!background) return null;
	return (
		<MainBlock style={{ background }}>
			<Wrap>
				<SearchInputContainer />
				<ContentContainer background={background} />
			</Wrap>
		</MainBlock>
	);
};

export default Main;
