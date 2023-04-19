import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, Month } from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    // getKpis: build.query<Array<GetKpisResponse>, void>({
    getKpis: build.query<Array<Month>, void>({
      query: () => "monthly", // "kpi/kpis",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = api;
