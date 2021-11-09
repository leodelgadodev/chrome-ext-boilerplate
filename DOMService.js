export const DOMService = () => {
    const subscribeToUrlChange = (onUrlChange) => {
        let lastUrl = location.href; 
        new MutationObserver(() => {
            const url = location.href;
            if (url !== lastUrl) {
              lastUrl = url;
              onUrlChange();
            }
          }).observe(document, {subtree: true, childList: true});
          
          if (hasReloadedPage()) {
              onUrlChange();
          }
    }
    
    function hasReloadedPage() {
        return window.performance.getEntriesByType("navigation") && window.performance.getEntriesByType("navigation")[0].type === 'reload';
    }
}