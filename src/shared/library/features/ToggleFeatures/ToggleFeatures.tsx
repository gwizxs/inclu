import { ReactElement } from "react";
import { getFeatureFlags } from "../setGetFeatures";
import { FeatureFlags } from "@/shared/types/featureFlags";

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { feature, on, off } = props;

    if (getFeatureFlags(feature)) {
        return on;
    }

    return off;
}