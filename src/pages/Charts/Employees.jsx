import React from 'react';
import { employeesData,employeesGrid } from '../../data/dummy';
import { GridComponent, ColumnsDirective, ColumnDirective, Page,Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { Header } from '../../components';

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent

        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (<ColumnDirective key={index} {...item} />))}
        </ColumnsDirective>
        {/* form moving pages */}
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
}; 
export default Employees;