import React, { useState } from "react";
import data from './data.json'
import { UserInterface } from "./interfaces";
import { UserContextWrapper }  from "./contexts/UserContext/UserContextWrapper";
import { PaginationContextWrapper }  from "./contexts/PaginationContext/PaginationContextWrapper";
import { Main } from './components/Main/Main';
import { Pagination } from "./components/Pagination/Pagination";

const App: React.FC = () => {
  const [users] = useState<UserInterface[]>(data);

  return (
      <div>
        <UserContextWrapper users={users}>
          <PaginationContextWrapper users={users} >
            <Main />
            <Pagination />
          </PaginationContextWrapper>
        </UserContextWrapper>
      </div>
  );
}

export default App;
