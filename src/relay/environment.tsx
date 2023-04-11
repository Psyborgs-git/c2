import { Environment, RecordSource, Store } from 'relay-runtime';
import {
  RelayNetworkLayer,
  urlMiddleware,
  loggerMiddleware,
  errorMiddleware,
  perfMiddleware,
  retryMiddleware,
  authMiddleware,
  cacheMiddleware,
  progressMiddleware,
  uploadMiddleware,
  Middleware,
  RelayRequestAny
} from 'react-relay-network-modern';
import { nanoid } from "nanoid";

const __DEV__ = process.env.NODE_ENV === "development"
export const url = __DEV__ ? `http://${window.location.hostname}:8000` :
  `https://api.jaesmetaverse.com`

const middlewares = (url: string, apiToken: string): Array<Middleware> => {
  return (
    [
      cacheMiddleware({
        size: 100, // max 100 requests,
        "ttl": 90000
      }),
      urlMiddleware({
        url: () => Promise.resolve(url),
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: (req: RelayRequestAny) => {
          return {
            "Access-Control-Allow-Origin": "true",
            "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
            "Access-Control-Allow-Credentials": "true",
            "api-key": apiToken,
            "Access-Control-Allow-Headers": "API, Content-Type, Dnt, Origin, User-Agent, X-CSRFToken, Access-Control-Allow-Origin, AUTHORIZATION",
            'X-CSRFToken': localStorage.getItem("csrftoken") ?? '',
            "X-Request-ID": nanoid(8)
          }
        }
      }),
      authMiddleware({
        token: () => window.localStorage.getItem("token") ?? "",
        allowEmptyToken: true,
        header: "AUTHORIZATION",
        "prefix": "",
        "tokenRefreshPromise": (req) => {
          return fetch(url + "user/refresh/")
            .then(
              res => res.json()
            )
            .then(
              res => {
                if (res.token) {
                  localStorage.setItem("token", res.token)
                  return res.token
                }
              })
            .catch((err) => console.log('[client.js] ERROR can not refresh token', err));
        }
      }),
      retryMiddleware({
        fetchTimeout: 15000,
        retryDelays: (attempt) => Math.pow(2, attempt + 4) * 100, // or simple array [3200, 6400, 12800, 25600, 51200, 102400, 204800, 409600],
        beforeRetry: ({ forceRetry, abort, delay, attempt, lastError, req }) => {
          if (attempt > 10) abort();
          // window.forceRelayRetry = forceRetry;
          console.log('call `forceRelayRetry()` for immediately retry! Or wait ' + delay + ' ms.');
        },
        statusCodes: [500, 503, 504],
      }),
      // @ts-ignore
      __DEV__ ? errorMiddleware() : null,
      // @ts-ignore
      __DEV__ ? perfMiddleware() : null,
      // @ts-ignore
      __DEV__ ? loggerMiddleware() : null,
      uploadMiddleware(),
      progressMiddleware({
        onProgress: (current, total) => {
          console.log('Downloaded: ' + current + ' B, total: ' + total + ' B');
          const px = new CustomEvent("progress", {
            detail: { progress: (current / (total ?? 100)) * 100 }
          });
          window.dispatchEvent(px);
        },
      }),
      (next) => async (req) => {
        // loading state middleware
        const px = new CustomEvent("loading", { detail: { loading: true } });
        window.dispatchEvent(px);

        const res = await next(req);
        const px2 = new CustomEvent("loading", { detail: { loading: false } });
        window.dispatchEvent(px2);

        return res;
      },
    ]
  )
};

const source = new RecordSource();
const store = new Store(source);
interface E {
  url: string;
  apiToken: string;
};

const environment = ({ url, apiToken }: E): Environment => new Environment({
  network: new RelayNetworkLayer(
    middlewares(url, apiToken),
    {}
  ),
  store
});


export const cloudrobe = environment({
  url: `${url}/cloudrobe/graphql`,
  apiToken: 'c409e6f36289f6e2323c55180c259f26e21513509364e2e98a82b0b1ac550002'
});
;

export const connections = environment({
  url: `${url}/connections/graphql`,
  apiToken: 'a6216f599cefe5a109425a5b7a3320a712972ff1e159ff962ddfd39540bdb6ef'
});
