import React from "react";
import shortid from "shortid";

const TableView = ({ data }) => {
  const { labels, datasets } = data;
  const headers = datasets.map(set => (
    <th key={shortid.generate()}>{set.title}</th>
  ));
  const rows = labels.map((label, i) => {
    return (
      <tr key={shortid.generate()}>
        <td key={shortid.generate()}>{label}</td>
        {datasets.map(set => <td key={shortid.generate()}>{set.values[i]}</td>)}
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th key={shortid.generate()}>Labels</th>
          {headers}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default TableView;
