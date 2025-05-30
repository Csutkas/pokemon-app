import Reactotron, {networking} from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const reactotron = Reactotron.configure()
  .configure({
    name: 'React Native App',
  })
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      // ignoreUrls: /symbolicate/,
    },
    redux: true,
    editor: false, // there are more options to editor
    errors: {veto: stackFrame => false}, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .use(reactotronRedux())
  .use(networking())
  .connect();

export default reactotron;
