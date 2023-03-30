const getDurationInMilliseconds = start => {
    const NS_PER_SEC = 1e9;
    const NS_TO_MS = 1e6;
    const diff = process.hrtime(start);

    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

function duration(req, res, next) {
    console.log(`${req.method} ${req.originalUrl} STARTED`);
    const getDurationInMs = getDurationInMilliseconds;
    const start = process.hrtime();

    res.on('finish', () => {
        const durationInMs = getDurationInMs(start);
        console.log(
            `${req.method} ${req.originalUrl} FINISHED in ${durationInMs.toLocaleString()} ms`,
        );
    });

    next();
}

module.exports = {
    duration,
};
