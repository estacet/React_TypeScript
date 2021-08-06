import { Table } from "../Table/Table";
import { SearchForm } from "../SearchForm/SearchForm";

export const Main: React.FC = () => {
    return (
        <div>
            <SearchForm />
            <Table />
        </div>
    );
}