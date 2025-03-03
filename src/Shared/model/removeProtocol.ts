export default function removeProtocol(url: string) {
  if (!url) return "";
  return url.replace("https://", "").replace("http://", "").replace("www.", "");
}
