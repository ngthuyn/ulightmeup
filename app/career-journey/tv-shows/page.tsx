import TVShowContent from "./TVShowContent";

type Props = {
  searchParams: Promise<{
    tab?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;

  const tab =
    params.tab === "show" ? "show" : "project";

  return <TVShowContent tab={tab} />;
}