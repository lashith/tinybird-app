import React from "react";
import MUIDataTable, { MUIDataTableOptions} from "mui-datatables";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {  Link } from "@material-ui/core";
import { Session } from '../store/sessionTypes';
import Styles from './Sessions.module.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

interface SessionsListProps {
  Sessions:Session[];
}

const ExpandableRowTable2 = (props:SessionsListProps) => {
  const {Sessions} = props;
  console.log( Sessions )

  const schools = Sessions.map((school) => school.collage_name)

  const uniqueChars:string[] = [];
  schools.forEach((c) => {
      if (!uniqueChars.includes(c)) {
          uniqueChars.push(c);
      }
  });
  const schoolsnames:any = uniqueChars.flatMap((sch:string)=>[[sch]])
  console.log('secondschool', schoolsnames)

  const out = Sessions.reduce((acc:any, obj:any) => {
    const key = obj["collage_name"];
    const curGroup = acc[key] ?? [];
    return { ...acc, [key]: [...curGroup, obj] };
  }, {});

  console.log('Sessions' , Sessions)
 console.log('out' , out)

const newarr = out;
console.log('newarr', newarr)

  const columns = [
    { name:"session id" },
    { name:"tutor name" },
    { name:"student name" },
    { name:"session started" },
    { name:"session link",
      render:(value:any) => {
        return (
          <Link href={value.session_link} target="_blank">{value.session_link}</Link>
        )
      }
    }   
  ];

  const options: MUIDataTableOptions = {
    filter: true,
     onFilterChange: (changedColumn:any, filterList:any) => {
      // console.log(changedColumn, filterList);
    },
    selectableRowsHideCheckboxes:false,
    selectableRows: 'none',
     filterType: "dropdown",
    // responsive: "scrollMaxHeight",
    rowsPerPage: 10,
    expandableRows: true,
    renderExpandableRow: (rowData:any, rowMeta:any) => {
      // console.log(rowData, rowMeta);
      return (
        <>
          <tr>
            <td colSpan={6}>
              <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                  <TableBody>
                  {Object.entries(out).map(([key, value]:any) => (                   
          <TableRow key={key}>
          {value.map((v:any) => {
            return (
              <>
                        <TableCell align="right">{v.session_id}</TableCell>
                        <TableCell align="right">{v.tutor_name}</TableCell>
                        <TableCell align="right">{v.student_name}</TableCell>
                        <TableCell align="right">{v.session_started}</TableCell>
                        <TableCell align="right">
                    <Link href={`${v.session_link}`} target="_blank">{v.session_link} </Link>  
                    </TableCell>    
              </>
            );
              
          }
          )}
          </TableRow>
      ))} 
                  </TableBody> 
                </Table>
              </TableContainer>
            </td>
          </tr>
      
        </>
      );
    },
    page: 1
  };

  return (
    <MUIDataTable
    title=''
    data={schoolsnames}
      // data={Sessions}
      columns={columns}
       options={options}
    />
  );
};

export default ExpandableRowTable2;
