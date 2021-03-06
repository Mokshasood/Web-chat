import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {

	if (!localStorage.getItem('username')) return <LoginForm />
		
	return (
		<ChatEngine
			height="100vh"
			projectID="1cafd1f3-98fc-49ae-ae2b-8837dd11f01d"
			//userName="ms"
			//userSecret="ms"
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
		/>
	);
}

export default App;