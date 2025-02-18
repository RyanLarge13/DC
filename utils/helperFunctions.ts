export const encodeNotificationURL = (
  route: string,
  type: string,
  text: string,
): string => {
  if (!route || !type || !text) {
    throw new Error(
      "You must pass in a route, type and text property through encodeNotificationUrl",
    );
  }
  const urlStr = `${route}/?${type}=${encodeURIComponent(text)}`;
  return urlStr;
};
