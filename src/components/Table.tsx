
import { Column } from "./columns";
import "./table.css";

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export function Table<T>({ columns, data }: TableProps<T>) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col, colIndex) => (
            <th key={colIndex} className={col.className || ""}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => {
              const renderedValue = col.render(row);
              return (
                <td key={colIndex} className={col.className || ""}>
                  {renderedValue}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
