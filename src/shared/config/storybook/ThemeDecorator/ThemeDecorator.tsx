/* eslint-disable react/display-name */
import { Theme } from "app/providers/ThemeProvider";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ThemeDecorator = (theme: Theme) => (StoryCom: any) => (
    <div className={`app ${theme}`}>
        <StoryCom />
    </div>
);