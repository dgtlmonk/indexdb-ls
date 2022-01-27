import { useEffect, useState } from "react";
import Dexie, { Table } from "dexie";

import ls from "localforage";

const dbName = "perkd-merchant-dev",
  dbVersion = 1;



interface Settings {
  installation: {
    id: string;
  };
  programs: any[];
}

class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  friends!: Table<Settings>;

  constructor() {
    super(dbName);
  }
}

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
