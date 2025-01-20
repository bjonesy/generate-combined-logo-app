import { useChatGPT } from "./hooks/useChatGPT.ts";
import { useState } from "react";
import { MenuItem, SelectMenu } from "./components/SelectMenu/SelectMenu.tsx";

function App() {
  const { chatMessages, fetchChatGPTResponse } = useChatGPT();
  const defaultSelect = {
    id: 0,
    name: "Select A Team",
  } as MenuItem;
  const [teamOne, setTeamOne] = useState(defaultSelect);
  const [teamTwo, setTeamTwo] = useState(defaultSelect);

  const teams = [
    {
      id: 1,
      name: "Arsenal FC",
    },
    {
      id: 2,
      name: "Stoke City FC",
    },
  ];

  const onGenerateLogo = async () => {
    console.log("generate logo");
    // Call the API and update messages
    // await fetchChatGPTResponse(chatMessages);
  };

  const onTeamOneSelect = (value: MenuItem) => {
    console.log(value, "selecting team one");
    setTeamOne(value);
  };

  const onTeamTwoSelect = (value: MenuItem) => {
    console.log(value, "selecting team two");
    setTeamTwo(value);
  };

  return (
    <div className="mt-10">
      <div className="text-3xl font-bold p-6">
        <h1>Select Teams</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 p-6">
        <div>
          <SelectMenu
            menuItems={teams}
            onSelect={onTeamOneSelect}
            selected={teamOne}
            selectMenuLabel="Select Team One"
          />
        </div>
        <div>
          <SelectMenu
            menuItems={teams}
            onSelect={onTeamTwoSelect}
            selected={teamTwo}
            selectMenuLabel="Select Team Two"
          />
        </div>
      </div>
      <div className="text-center p-6">
        <button
          onClick={onGenerateLogo}
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Generate Logo
        </button>
      </div>
    </div>
  );
}

export default App;
