export async function fetchImages(query, currentPage, perPage) {
  const res = await fetch(
    `https://pixabay.com/api/?page=${currentPage}&key=30324488-6bb1c38396bab0c48c780a7b6&image_type=photo&orientation=horizontal&per_page=${perPage}&q=${query}`
  );
  return await res.json();
}
