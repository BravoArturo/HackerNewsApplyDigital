import { WebView } from 'react-native-webview';
import { ErrorLoadingProps } from './components/types';
export type HackerNewWebViewProps = ErrorLoadingProps & {
  url: string;
  webViewRef: React.RefObject<WebView<{}> | null>;
};

export type HackerNewWebViewViewModelType = {
  params: Readonly<{
    story_url: string;
  }>;
};
