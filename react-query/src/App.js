
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
// import Example from './components/Example';
// import QuickStart from './components/QuickStart';
// import { ReactQueryDevtools } from 'react-query/devtools'
import PaginationExample from './components/PaginationExample';
import InfiniteScroll from './components/InfiniteScroll';
import ErrorBoundary from 'antd'



const queryClient = new QueryClient();

function App() {
  return (<>
  <QueryClientProvider client={queryClient}>
 {/* <Example/>
 <QuickStart/>
 <ReactQueryDevtools/> */}
 <PaginationExample/>
 <InfiniteScroll/>
 </QueryClientProvider>

 

 </>)}

export default App;
