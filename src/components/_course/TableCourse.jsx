import React from 'react'
import './TableCourse.css'

function TableCourse({data}) {
  return (
    <table className='table_content'>
        <thead>
            <tr>
                <th className='max-width'>{data.title}</th>
                <th className='min-width'>Nota</th>
            </tr>
        </thead>
        <tbody>
            {
                data.notes.map((item,index) => (
                    <tr key={`tr_table_${index}`}>
                        <td>{item.name}</td>
                        <td>{item.score}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default TableCourse