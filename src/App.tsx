import { useEffect, useState } from "react";
import ls from "localforage";


function App() {
  const [settings, setSettings ] = useState<any>(null)

  useEffect(() => {
   ls.getItem('settings').then(settings  => {
     if (!settings) {
       ls.setItem('settings', {
         installation: {
           id: 1
         }
       })
       return;
     }

     setSettings(settings)
   })

  }, []);

  function addDB() {}

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        width: "70%",
        padding: "8rem",
      }}
    >
      Settings
      <textarea placeholder="loading ..." rows={10} value={JSON.stringify(settings)} />
    </div>
  );
}

export default App;
