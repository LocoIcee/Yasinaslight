import { useCallback, useEffect, useRef, useState } from "react";

const HCAPTCHA_SCRIPT_ID = "hcaptcha-script";
const HCAPTCHA_ENDPOINT = "https://js.hcaptcha.com/1/api.js";
const HCAPTCHA_CONTAINER_ID = "hcaptcha-invisible";

const loadHcaptchaScript = (siteKey, onReady) => {
  if (!siteKey || typeof window === "undefined") return;

  const existingScript = document.getElementById(HCAPTCHA_SCRIPT_ID);

  if (existingScript) {
    if (window.hcaptcha) {
      onReady();
    }
    return;
  }

  const script = document.createElement("script");
  script.id = HCAPTCHA_SCRIPT_ID;
  script.src = `${HCAPTCHA_ENDPOINT}?render=explicit`;
  script.async = true;
  script.defer = true;
  script.onload = () => {
    if (window.hcaptcha) {
      onReady();
    }
  };
  document.body.appendChild(script);
};

const useHcaptcha = (siteKey) => {
  const [isReady, setIsReady] = useState(false);
  const widgetIdRef = useRef(null);
  const resolverRef = useRef(null);

  useEffect(() => {
    if (!siteKey) return;

    const handleReady = () => setIsReady(true);
    loadHcaptchaScript(siteKey, handleReady);
  }, [siteKey]);

  const ensureWidget = useCallback(() => {
    if (widgetIdRef.current !== null) {
      return widgetIdRef.current;
    }

    if (!window.hcaptcha) return null;

    const container = document.getElementById(HCAPTCHA_CONTAINER_ID);
    if (!container) return null;

    widgetIdRef.current = window.hcaptcha.render(container, {
      sitekey: siteKey,
      size: "invisible",
      callback: (token) => {
        if (resolverRef.current) {
          resolverRef.current.resolve(token);
          resolverRef.current = null;
        }
      },
      "error-callback": () => {
        if (resolverRef.current) {
          resolverRef.current.reject(new Error("Captcha verification failed. Please try again."));
          resolverRef.current = null;
        }
      },
    });

    return widgetIdRef.current;
  }, [siteKey]);

  const execute = useCallback(
    (action) => {
      if (!siteKey) {
        return Promise.resolve(null);
      }

      if (typeof window === "undefined" || !window.hcaptcha) {
        return Promise.reject(new Error("Captcha is still loading. Please try again."));
      }

      return new Promise((resolve, reject) => {
        try {
          const widgetId = ensureWidget();

          if (widgetId === null) {
            reject(new Error("Captcha is still loading. Please try again."));
            return;
          }

          resolverRef.current = { resolve, reject };
          try {
            window.hcaptcha.reset(widgetId);
          } catch (error) {
            // ignore reset issues before first execution
          }
          window.hcaptcha.execute(widgetId, { async: true, action });
        } catch (error) {
          reject(new Error("Captcha verification failed. Please try again."));
        }
      });
    },
    [ensureWidget, siteKey]
  );

  const reset = useCallback(() => {
    if (typeof window !== "undefined" && window.hcaptcha && widgetIdRef.current !== null) {
      try {
        window.hcaptcha.reset(widgetIdRef.current);
      } catch (error) {
        // ignore widget reset issues
      }
    }
    resolverRef.current = null;
  }, []);

  return { execute, isReady, reset, containerId: HCAPTCHA_CONTAINER_ID };
};

export default useHcaptcha;
