import {api as index} from "..";

const api = index.injectEndpoints({
    endpoints: (build) => ({
        uploadFile: build.mutation<{url: string}, FormData>({
            query: (data) => ({
                url: `upload/file`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Todo"],
        }),
    }),
});

export const { useUploadFileMutation } = api;