// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
// import { env } from './.env';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: {
  production: boolean;
  signaling: string;
  iceServers: RTCIceServer[];
  version: string;
  serverUrl;
  defaultLanguage;
  supportedLanguages;
} = {
  production: false,
  //   production: false,
  version: 'npm_package_version' + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  signaling: 'http://localhost:3333',

  iceServers: [
    {
      urls: ['stun:54.90.98.123:3478'],
      username: 'works',
      credential: 'contact',
    },
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// export const environment = {
//   production: false,
//   version: 'npm_package_version' + '-dev',
//   serverUrl: '/api',
//   defaultLanguage: 'en-US',
//   supportedLanguages: ['en-US'],
//   signaling: 'http://localhost:3333',

//   iceServers: [
//     {
//       urls: ['stun:54.90.98.123:3478'],
//       username: 'works',
//       credential: 'contact',
//       credentialType: 'password',
//     },
//   ],
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
