export type Cleanup = () => void;

/** addEventListener that returns its own cleanup. */
export function listen<K extends keyof DocumentEventMap>(
  target: Document | Window | HTMLElement,
  type: K,
  handler: (e: DocumentEventMap[K]) => void,
  options?: AddEventListenerOptions,
): Cleanup {
  target.addEventListener(type, handler as EventListener, options);
  return () => target.removeEventListener(type, handler as EventListener, options);
}

export const combine = (...cleanups: Cleanup[]): Cleanup => () => cleanups.forEach((c) => c());

export function swapClasses(el: Element | null | undefined, remove: readonly string[], add: readonly string[]) {
  if (!el) return;
  el.classList.remove(...remove);
  el.classList.add(...add);
}

export const closestFrom = <T extends Element = HTMLElement>(target: EventTarget | null, selector: string) =>
  target instanceof Element ? (target.closest(selector) as T | null) : null;
