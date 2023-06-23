import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

export function SecondPage() {
	return <div>This is the Second Page</div>;
}

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index={true} element={<Home />} />
				<Route path='shop' element={<SecondPage />} />
			</Route>
		</Routes>
	);
}
export default App;
