import { createContext } from 'react';

export interface IMapHoverContext {
  element?: number | null;
  hovered?: boolean;
  hoverElement: (elmt) => void;
}

export default createContext<IMapHoverContext>({
  element: null,
  hovered: false,
  hoverElement: (elmt) => {},
});
