/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryClient } from "@tanstack/react-query";
import { createTRPCQueryUtils } from "@trpc/react-query";
import { api } from "~/trpc/react";

const trpcClient = api.createClient({ links: [] });
const queryClient = new QueryClient();
const clientUtils = createTRPCQueryUtils({ queryClient, client: trpcClient });

type ThisIsCorrectlyTyped = typeof clientUtils.post.getLatest;
//   ^?

type ThisIsNotCorrectlyTyped = typeof clientUtils.post.create;
//   ^?

export default function Page() {
  return null;
}
