const SHOW_PAST_CONCERTS_FOR_N_DAYS = 2;

export const filterAndSortConcerts = concerts => {
  const dateCheckpoint = new Date();
  dateCheckpoint.setDate(
    dateCheckpoint.getDate() - SHOW_PAST_CONCERTS_FOR_N_DAYS
  );

  return concerts
    .map(obj => obj.node)
    .filter(concert => new Date(concert.date) > dateCheckpoint)
    .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0));
};
