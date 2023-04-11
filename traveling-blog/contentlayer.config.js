import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Explore = defineDocumentType(() => ({
  name: "Explore",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    country : {
      type: "string",
      description: "The country of the post",
      required: true,
    },
    thumbnail: {
      type: "string",
      description: "The thumbnail of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `explore/${doc._raw.flattenedPath}`,
    },
  },
}));

const Journal = defineDocumentType(() => ({
  name: "Journal",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `journal/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Explore, Journal],
});
