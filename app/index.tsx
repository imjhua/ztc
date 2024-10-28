import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

const URI =
  'http://idlt.localhost:2222/%ED%94%84%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%B9%99%EC%9A%A9%EC%96%B4%EC%A7%91'
  
const Page = () => {
  return (
    <WebView source={{ uri: URI }} allowsBackForwardNavigationGestures />
  )
}

export default Page

const styles = StyleSheet.create({})
