import middleware from './_common/middleware.js';

// Wappalyzer package is deprecated and no longer functional
// This handler returns an error message explaining the situation
const techStackHandler = async (url) => {
  throw new Error(
    'The tech-stack detection feature is currently unavailable. ' +
    'The underlying wappalyzer package has been deprecated. ' +
    'Please use the Wappalyzer API at https://www.wappalyzer.com/api instead, ' +
    'or consider implementing an alternative technology detection solution.'
  );
};

export const handler = middleware(techStackHandler);
export default handler;
