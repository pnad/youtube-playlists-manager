ytplm.getData = function(ytFn, ytOpt, callback, singlePage) {
	var arr = [];
	function query(page) {
		if (page)
			ytOpt.pageToken = page;
		ytFn(ytOpt).execute(function(data) {
			if (data.items)
				arr = arr.concat(data.items);
			if (data.nextPageToken && !singlePage)
				query(data.nextPageToken);
			else
				callback(arr);
		});
	}
	query();
}

ytplm.setData = function(ytFn, ytData, callback) {
	ytFn(ytData).execute(function(data) {
		callback(data);
	});
}
