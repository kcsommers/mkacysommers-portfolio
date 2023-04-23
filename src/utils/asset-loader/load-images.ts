import { logger } from '../logger';

export const loadImages = (
  images: string[],
  imageCache: Map<string, string>
) => {
  logger.log('loading images::::');
  if (!images?.length) {
    return;
  }
  const ImageLoaderWorker = new Worker(
    new URL('./asset-loader.worker.ts', import.meta.url)
  );
  ImageLoaderWorker.onmessage = (
    e: MessageEvent<{ assetUrl: string; assetBlob: Blob }>
  ) => {
    logger.log('setting image in cache:::: ', e.data);
    const { assetUrl, assetBlob } = e.data;
    const imageBlobUrl = URL.createObjectURL(assetBlob);
    imageCache.set(assetUrl, imageBlobUrl);
  };

  ImageLoaderWorker.onerror = (error) => {
    logger.error('ImageLoaderWorker.onerror:::: ', error);
  };

  ImageLoaderWorker.onmessageerror = (
    e: MessageEvent<{ assetUrl: string; assetBlob: string }>
  ) => {
    logger.error('ImageLoaderWorker.onmessageerror:::: ', e);
  };

  (images || []).forEach((src) => {
    ImageLoaderWorker.postMessage(src);
  });
};
