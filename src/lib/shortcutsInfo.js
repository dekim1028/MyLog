const iconURL = '/icon';

const shortcutsInfo = {
	portal: [
		{
			id: 'google',
			name: '구글',
			image: `${iconURL}/google.png`,
			url: 'https://www.google.com/',
			type: 'portal',
		},
		{
			id: 'naver',
			name: '네이버',
			image: `${iconURL}/naver.png`,
			url: 'https://www.naver.com/',
			type: 'portal',
		},
	],
	sns: [
		{
			id: 'facebook',
			name: '페이스북',
			image: `${iconURL}/facebook.png`,
			url: 'https://www.facebook.com/',
			type: 'sns',
		},
		{
			id: 'instagram',
			name: '인스타그램',
			image: `${iconURL}/instagram.png`,
			url: 'https://www.instagram.com/',
			type: 'sns',
		},
		{
			id: 'twitter',
			name: '트위터',
			image: `${iconURL}/twitter.png`,
			url: 'https://twitter.com/?lang=ko',
			type: 'sns',
		},
		{
			id: 'naver_band',
			name: '밴드',
			image: `${iconURL}/naver_band.png`,
			url: 'https://band.us/ko',
			type: 'sns',
		},
	],
	streaming: [
		{
			id: 'youtube',
			name: '유튜브',
			image: `${iconURL}/youtube.png`,
			url: 'https://www.youtube.com/?gl=KR',
			type: 'streaming',
		},
		{
			id: 'netflix',
			name: '넷플릭스',
			image: `${iconURL}/netflix.png`,
			url: 'https://www.netflix.com/kr/',
			type: 'streaming',
		},
		{
			id: 'watcha',
			name: '왓챠',
			image: `${iconURL}/watcha.png`,
			url: 'https://watcha.com/',
			type: 'streaming',
		},
	],
	blog: [
		{
			id: 'naver_blog',
			name: '네이버블로그',
			image: `${iconURL}/naver_blog.png`,
			url:
				'https://section.blog.naver.com/BlogHome.nhn?directoryNo=0&currentPage=1&groupId=0',
			type: 'blog',
		},
		{
			id: 'tistory',
			name: '티스토리',
			image: `${iconURL}/tistory.png`,
			url: 'https://www.tistory.com/',
			type: 'blog',
		},
	],
	mylog: [],
};

export default shortcutsInfo;
