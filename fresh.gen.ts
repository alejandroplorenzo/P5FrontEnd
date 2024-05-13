// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $Menu from "./routes/Menu.tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_Layout from "./routes/_Layout.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $Filter from "./islands/Filter.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/Menu.tsx": $Menu,
    "./routes/_404.tsx": $_404,
    "./routes/_Layout.tsx": $_Layout,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Filter.tsx": $Filter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;