export const searchData = [
	{ id: 1, title: 'Post 1', content: 'This is the first post.' },
	{ id: 2, title: 'Post 2', content: 'This is the second post.' },
	{ id: 3, title: 'Post 3', content: 'This is the third post.' },
  ];
  
  export const searchApi = async (query) => {
	return searchData.filter((item) =>
	  item.title.toLowerCase().includes(query.toLowerCase())
	);
  };
  