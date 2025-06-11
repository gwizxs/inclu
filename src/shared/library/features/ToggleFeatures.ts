import { FeatureFlags } from "@/shared/types/featureFlags";
import { getFeatureFlags } from "./setGetFeatures";

interface toggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({ name, on, off }: toggleFeaturesOptions<T>): T {
    if (getFeatureFlags(name)) {
        return on();
    }

    return off();
}