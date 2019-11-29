module.exports.map = function(doc) {
    if (("summary" in doc) && ("manifestdate" in doc.summary) &&
	(doc.summary.manifestdate == doc.reposManifestDate) &&
	(!("metadatasummary" in doc) ||
	 (doc.summary.manifestdate != doc.metadatasummary.manifestdate)
	)
       ) {
        emit(doc.reposManifestDate,null);
    };
};
module.exports.reduce = "_count";
