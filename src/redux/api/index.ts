import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_TODO_API}`,
});

const UploadBaseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_UPLOAD_API}`,
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  if (args.url.startsWith("upload/file")) {
    return UploadBaseQuery(args, api, extraOptions);
  } else {
    return baseQuery(args, api, extraOptions);
  }
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: ["Todo"],
  endpoints: () => ({}),
});
