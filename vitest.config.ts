import { UserConfig } from 'vitest';

const config: { test: UserConfig } = {
  test: {
    environment: 'jsdom',
    threads: false,
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
    testTimeout: 50000,
  },
};

export default config;
