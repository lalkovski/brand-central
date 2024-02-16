import loadable from "@loadable/component";
import FullScreenLoader from "components/FullScreenLoader";
import { retry } from "helpers/helperFunctions";

export const AsyncUserSickPayHours = loadable(
  () => retry(() => import(/* webpackChunkName: "Brands" */ "./Brands")),
  {
    fallback: <FullScreenLoader />,
  }
);
