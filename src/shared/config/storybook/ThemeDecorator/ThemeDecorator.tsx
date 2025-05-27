/* eslint-disable react/display-name */
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ThemeDecorator = (theme: Theme) => (StoryCom: any) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryCom />
    </div>
  </ThemeProvider>
);
