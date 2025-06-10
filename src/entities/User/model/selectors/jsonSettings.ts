import { buildSelector } from "@/shared/library/store";
import { JsonSettings } from "../types/jsonSettings";
import { Theme } from "@/shared/const/theme";


const defaultJsonSettings: JsonSettings = {

};


export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) => state.user?.authData?.jsonSettings ?? defaultJsonSettings,
);

