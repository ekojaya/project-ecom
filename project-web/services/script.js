import { useEffect, useState } from 'react';

/**
 * useScript will load external script from third party and know when
 * it's has been loaded.
 * 
 * EXAMPLE:
 * 
 * const App = () => {
 *  const [loaded, error] = useScript('https://code.jquery.com/jquery-3.4.1.min.js');
 *   
 *  const functionUsingScript = () => {
 *    if (loaded && !error) {
 *      console.log($('#hello-world'));
 *    }
 *  }
 *  
 *  return (
 *    <div>
 *      <p id="hello-world">Hello World</p>  
 *    </div>
 *  );
 * }
 */
export const cachedScripts = [];
export const useScript = (scriptURL) => {

  const [state, setState] = useState({
    loaded: false,
    error: false,
  });

  useEffect(() => {
    if (cachedScripts.includes(scriptURL)) {
      
      // If script is already loaded
      setState({
        loaded: true,
        error: false,
      });
    } else {
      cachedScripts.push(scriptURL);

      const script = document.createElement('script');
      script.src = scriptURL;
      script.async = true;

      const onScriptLoad = () => {
        setState({
          loaded: true,
          error: false,
        });
      }

      const onScriptError = () => {
        const index = cachedScripts.indexOf(scriptURL);
        if (index >= 0) {
          cachedScripts.splice(index, 1);
        }
        script.remove();

        setState({
          loaded: true,
          error: true,
        });
      }

      script.addEventListener('load', onScriptLoad);
      script.addEventListener('error', onScriptError);
      
      document.body.appendChild(script);

      return () => {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
      };
    }
  }, [scriptURL]);

  return [state.loaded, state.error];
}