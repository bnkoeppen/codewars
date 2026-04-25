function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const pluralize = (n, duration) =>
    n === 1 ? `${n} ${duration}` : `${n} ${duration}s`;
  const years = Math.trunc(seconds / 31536000);
  const days = Math.trunc(seconds / 86400) % 365;
  const hours = Math.trunc(seconds / 3600) % 24;
  const minutes = Math.trunc(seconds / 60) % 60;
  const actual_seconds = seconds % 60;
  const durations = [
    [years, "year"],
    [days, "day"],
    [hours, "hour"],
    [minutes, "minute"],
    [actual_seconds, "second"],
  ];
  const nonzeroDurations = durations.filter((v) => v[0] !== 0);
  if (nonzeroDurations.length === 1) return pluralize(...nonzeroDurations[0]);
  return (
    nonzeroDurations
      .slice(0, -1)
      .reduce((acc, dur, i) => acc + pluralize(...dur) + ", ", "")
      .slice(0, -2) +
    " and " +
    pluralize(...nonzeroDurations.at(-1))
  );
}
