import { redirect } from "next/navigation";



function App() {
  redirect('/login')
  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      
    </div>
  );
}

export default App;