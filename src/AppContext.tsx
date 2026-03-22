import React, { createContext, useContext, useState, useCallback } from 'react';
import { NavState, PageId } from '@/types';

interface AppCtx {
  nav: NavState;
  favs: Set<number>;
  toastMsg: string;
  goto: (page: PageId, opts?: Partial<NavState>) => void;
  showDetail: (id: number) => void;
  toggleFav: (id: number) => void;
  showToast: (msg: string) => void;
}

const Ctx = createContext<AppCtx | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [nav, setNav] = useState<NavState>({ page: 'home' });
  const [favs, setFavs] = useState<Set<number>>(new Set());
  const [toastMsg, setToastMsg] = useState('');

  const goto = useCallback((page: PageId, opts?: Partial<NavState>) => {
    setNav({ page, ...opts });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const showDetail = useCallback((id: number) => {
    setNav({ page: 'detail', detailId: id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleFav = useCallback((id: number) => {
    setFavs(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 4200);
  }, []);

  return (
    <Ctx.Provider value={{ nav, favs, goto, showDetail, toggleFav, toastMsg, showToast }}>
      {children}
    </Ctx.Provider>
  );
}

export function useApp() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
