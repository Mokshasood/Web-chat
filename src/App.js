import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID="1cafd1f3-98fc-49ae-ae2b-8837dd11f01d"
			userName="jp"
			userSecret="jp"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
		/>
	);
}

export default App;