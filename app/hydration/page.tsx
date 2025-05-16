import { dehydrate } from "@tanstack/query-core";
import Main from "./main";
import { HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchDataPictureDay } from "../../utils/api-requests";

export default async function Hydation() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["hydrate-users"],
    queryFn: fetchDataPictureDay,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main />
    </HydrationBoundary>
  );
}