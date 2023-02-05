import React from 'react'
import csvDownload from 'json-to-csv-export'

const CsvDownloadButton = (props) => {
  const { data, filename, delimiter, headers, columnsToIgnore, ...others } = props

  function removeColumns(objects, columnsToIgnore) {
    return objects.map(obj => {
      const newObj = {};
      Object.entries(obj).forEach(([key, value]) => {
        if (!columnsToIgnore.includes(key)) {
          newObj[key] = value;
        }
      });
      return newObj;
    });
  }

  const filteredData = columnsToIgnore ? removeColumns(data, columnsToIgnore) : data;
  return (
    <button
      onClick={() => csvDownload({ data: filteredData, filename, delimiter, headers })}
      {...others}
    >
      {props.children || 'Download Data'}
    </button>
  )
}
export default CsvDownloadButton
