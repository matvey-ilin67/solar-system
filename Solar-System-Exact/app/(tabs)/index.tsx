import { StyleSheet, View, Platform, Text, useWindowDimensions } from "react-native";
import { WebView } from "react-native-webview";
import { getApiUrl } from "@/lib/query-client";
import { useEffect } from "react";

export default function SolarSystemScreen() {
  let url: string;
  try {
    url = getApiUrl();
  } catch {
    url = "";
  }

  const { width, height } = useWindowDimensions();
  const isWeb = Platform.OS === "web";

  useEffect(() => {
    if (isWeb && url) {
      window.location.href = url;
    }
  }, [isWeb, url]);

  if (isWeb) {
    return (
      <View style={styles.container}>
        <Text style={styles.webText}>Redirecting to Solar System simulation...</Text>
      </View>
    );
  }

  if (!url) {
    return (
      <View style={styles.container}>
        <Text style={styles.webText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={[styles.webview, { width, height }]}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}
        scalesPageToFit
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080c18",
  },
  webview: {
    flex: 1,
    backgroundColor: "#080c18",
  },
  webFallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 32,
  },
  webTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#e0e8f8",
    textAlign: "center",
  },
  webText: {
    fontSize: 14,
    color: "#8aa0c0",
    textAlign: "center",
    lineHeight: 22,
  },
  openBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#2266aa",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 8,
  },
  openBtnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
