import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { loadImages } from '../utils/asset-loader/load-images';

type AssetCacheContext = {
  imageCache: Map<string, string>;
  videoCache: Map<string, string>;
};

type AssetCacheProviderProps = PropsWithChildren<{
  imageUrls?: string[];
  videoUrls?: string[];
}>;

const ASSET_CACHE_CONTEXT = createContext({} as AssetCacheContext);

export const AssetCacheProvider = ({
  imageUrls,
  videoUrls,
  children,
}: AssetCacheProviderProps) => {
  const imageCache = useMemo(() => new Map<string, string>(), []);
  const videoCache = useMemo(() => new Map<string, string>(), []);

  useEffect(() => {
    loadImages(imageUrls, imageCache);
  }, []);

  return (
    <ASSET_CACHE_CONTEXT.Provider value={{ imageCache, videoCache }}>
      {children}
    </ASSET_CACHE_CONTEXT.Provider>
  );
};

export const useAssetCache = (): AssetCacheContext => {
  const context: AssetCacheContext = useContext(ASSET_CACHE_CONTEXT);
  if (context === undefined) {
    throw new Error('useAssetCache must be used within a AssetCacheProvider');
  }
  return context;
};
