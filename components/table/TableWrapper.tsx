 import { FileType } from '@/typings'
import React from 'react'
import { Button } from '../ui/button'
import { columns } from './columns'
import { DataTable } from './Table'

 const TableWrapper = ({ skeletonFiles}: {skeletonFiles: FileType[]}) => {
   return (
     <div>

        <Button>Sort By...</Button>
        <DataTable columns={columns} data={skeletonFiles}/>
     </div>
   )
 }

 export default TableWrapper