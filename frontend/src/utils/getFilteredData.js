const getFilteredData = (data, filters, searchItem) => {
  return data
    .sort((a, b) => a.year - b.year)
    .map((album) => {
      // CD and Vinyl filter
      if (!(filters.cd && filters.vinyl)) {
        if (
          (filters.cd && album.type === "Vinile") ||
          (filters.vinyl && album.type === "CD")
        ) {
          return;
        }
      }

      // Owned and Wished filter
      if (!(filters.wished && filters.owned)) {
        if (
          (filters.wished && album.owned) ||
          (filters.owned && !album.owned)
        ) {
          return;
        }
      }

      // Search filter
      if (
        album.title.toLowerCase().indexOf(searchItem.toLowerCase()) !== 0 &&
        String(album.year).indexOf(searchItem) !== 0 &&
        album.artist.toLowerCase().indexOf(searchItem.toLowerCase())
      ) {
        return;
      }

      return album;
    })
    .filter((value) => value !== undefined);
};

export default getFilteredData;
