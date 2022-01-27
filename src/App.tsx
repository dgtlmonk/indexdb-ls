import { createRef, useEffect, useState } from "react";
import ls from "localforage";


function App() {
  const [settings, setSettings ] = useState<any>(null)
  const idRef = createRef<any>()

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
       Current Settings value
      <textarea placeholder="loading ..." rows={4} value={JSON.stringify(settings)} />

      <div>
        New settings installation ID value
        ID <input ref={idRef} style={{ height: '2rem', border: '1px solid #ccc'}}/>
      </div>
       <button
        style={{ padding: '1rem', margin: '1rem'}} 
       onClick={()=> {
         ls.setItem('settings', {
           instalattion: {
             id: `${idRef.current.value}`
           }
         }).then(res => {
           setSettings(res)
         })

       }}>Apply</button>

    </div>
  );
}

export default App;
