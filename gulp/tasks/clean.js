import { deleteAsync } from "del";

export const clean = await deleteAsync("build");
