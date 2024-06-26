import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recAnime = reproduce(recAnime, 10)

  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"></Header>
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title="Rekomendasi"></Header>
        <AnimeList api={recAnime} />
      </section>
    </>
  );
};
export default Page;
